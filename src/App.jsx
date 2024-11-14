import { useEffect, useState } from 'react';
import './App.css';

import PostList from './components/PostList';

export const url = 'https://jsonplaceholder.typicode.com/users/1/posts?_start=0&_limit=5';

function App() {

  const [posts, setPosts] = useState([]);

  const [status, setStatus] = useState('idle');

  const loading = status === 'loading';

  const error = status === 'error';

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus('loading');

        const resp = await fetch(url); // this will be mocked
        const data = await resp.json();
        setPosts(data);

        setStatus('idle');
      } catch(e) {
        setStatus('error');
        console.error(e.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My blog posts</h1>
      {error ? <p>Something went wrong</p>
      : <PostList posts={posts} loading={loading} />
      }
    </div>
  );
}

export default App;
