from flask import Blueprint, jsonify
import psycopg2

main = Blueprint('main', __name__)

def get_db_connection():
    conn = psycopg2.connect(
        dbname='mydatabase',
        user='myuser',
        password='mypassword',
        host='localhost'
    )
    return conn

@main.route('/')
def index():
    return 'Hello, World!'

@main.route('/folders/<int:user_id>', methods=['GET'])
def get_folders(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()

    cursor.execute("""
        WITH RECURSIVE project_tree AS (
            SELECT id, name, parent_project_id, is_subproject
            FROM projects
            WHERE user_id = %s AND parent_project_id IS NULL
            UNION ALL
            SELECT p.id, p.name, p.parent_project_id, p.is_subproject
            FROM projects p
            INNER JOIN project_tree pt ON pt.id = p.parent_project_id
        )
        SELECT * FROM project_tree;
    """, (user_id,))
    projects = cursor.fetchall()

    cursor.execute("""
        SELECT * FROM documents WHERE project_id IN (SELECT id FROM projects WHERE user_id = %s)
    """, (user_id,))
    documents = cursor.fetchall()

    conn.close()

    def build_tree(items, parent_id=None):
        tree = []
        for item in items:
            if item[2] == parent_id:
                children = build_tree(items, item[0])
                docs = [doc for doc in documents if doc[2] == item[0]]
                tree.append({
                    'id': item[0],
                    'name': item[1],
                    'parent_project_id': item[2],
                    'is_subproject': item[3],
                    'children': children,
                    'documents': [{'id': doc[0], 'name': doc[1], 'project_id': doc[2]} for doc in docs]
                })
        return tree

    folder_data = build_tree(projects)

    return jsonify(folder_data)

