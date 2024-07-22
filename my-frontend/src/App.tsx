import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Data from Database</h1>
        {/* The content area where fetched data will be displayed */}
      </div>
    </div>
  );
};

export default App;

