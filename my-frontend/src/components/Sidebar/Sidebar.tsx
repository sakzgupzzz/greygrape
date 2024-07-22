import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Folder from '../Folder/Folder';
import './Sidebar.css';

interface DocumentData {
  id: number;
  name: string;
  project_id: number;
}

interface FolderData {
  id: number;
  name: string;
  parent_project_id: number | null;
  is_subproject: boolean;
  children?: FolderData[];
  documents?: DocumentData[];
}

const Sidebar: React.FC = () => {
  const [folderData, setFolderData] = useState<FolderData[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/folders/1')  // Assuming user ID 1 for now
      .then(response => {
        setFolderData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the folder data!', error);
      });
  }, []);

  const renderFolders = (data: FolderData[]) => {
    return data.map((folder, index) => (
      <Folder key={index} name={folder.name}>
        {folder.documents && folder.documents.map(doc => (
          <div key={doc.id}>{doc.name}</div>
        ))}
        {folder.children && renderFolders(folder.children)}
      </Folder>
    ));
  };

  return (
    <div className="sidebar">
      {renderFolders(folderData)}
    </div>
  );
};

export default Sidebar;

