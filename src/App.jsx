import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';

import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const resp = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await resp.json();
        setUsers(users);
      } catch(e) {
        console.error(e.message);
      }
    }

    fetchUsers();
  }, []);

  return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Blog Portal</Link>
          </h1>
        </header>

        <div className="layout">
          <Sidebar users={users} />
          <Outlet />
        </div>
      </div>
  );
}

export default App;
