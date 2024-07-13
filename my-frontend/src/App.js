import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Data from Database</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

