// App.js
import React, { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('/api');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const handleAddItem = async (item) => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    const newItem = await response.json();
    setData([...data, newItem]);
  };

  return (
    <div>
      <h1>CRUD en React y Node.js</h1>
      <List data={data} />
      <Form onAddItem={handleAddItem} />
    </div>
  );
}

export default App;
