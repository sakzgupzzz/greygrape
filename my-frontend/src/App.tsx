import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

interface DataItem {
  id: number;
  name: string;
  value: number;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Data from Database</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}: {item.value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
