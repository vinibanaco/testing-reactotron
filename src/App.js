import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  /**
   * Set `users` state with the GitHub API response
   */
  useEffect(() => {
    async function getUsers() {
      const data = await fetch('https://api.github.com/users')
        .then((response) => response.json())
        .then((json) => {
          return json;
        });

      setUsers(data);
    }
    getUsers();
  }, []);

  return (
    <>
      <h1>Testing Reactotron</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.login}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
