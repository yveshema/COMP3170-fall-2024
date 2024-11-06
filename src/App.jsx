import { useEffect, useState } from 'react';
import styled from 'styled-components';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const [users, setUsers] = useState([]);

  function getAuthor(post) {
    return users.find(user => String(user.id) === String(post.userId));
  }

  const [status, setStatus] = useState('idle');

  const isLoading = status === 'loading';

  const isError = status === 'error';

  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  const [post, setPost] = useState({
    title: '',
    body: '',
    userId: '',
  });

  function handleChange(e) {
    setPost({...post, [e.target.name]: e.target.value});
  }

  useEffect(() => {

    async function fetchData() {
      let postsResponse, usersResponse;

      try {
        setStatus('loading');

        // force delay
        await new Promise(resolve => {
          setTimeout(resolve, 2000);
        });

        [postsResponse, usersResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users")
        ]);

        const posts = await postsResponse.json();
        const users = await usersResponse.json();

        setPosts(posts);
        setUsers(users);

        setStatus('idle');
  
      } catch(e) {
        setStatus('error');
        console.error(e.message);
      }
    }

    fetchData();
    
  }, []);


  function handleSubmit(e) {
    e.preventDefault();
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setPosts([post, ...posts]);
    });

    setPost({
      title: '',
      body: '',
      userId: ''
    });

    toggleOpen();
  }

  return (
    <Container>
      <h1>My blog posts</h1>

      <button onClick={() => toggleOpen()}>Create new post</button>

      {open && 
      <Form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" value={post.title} onChange={handleChange} />
        </p>

        <p>
          <label htmlFor="body">Body: </label>
          <textarea name="body" rows="5" value={post.body} onChange={handleChange}>type here...</textarea>
        </p>

        <p>
          <label htmlFor="userId">Author: </label>
          <select name="userId" value={post.userId} onChange={handleChange}>
            <option value="">Select author</option>
            {users.map(user => (
              <option type={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </p>

        <button>Submit</button>
      </Form>}

      {isLoading ? <p>Loading...</p>
      : isError ? <p>Error while loading data</p>
      : (
        <>
          {posts.map(post => {
            const author = getAuthor(post);

            return (
              <Post key={post.id}>
                <h2>{post.title}</h2>
                By <a href={`https://${author.website}`} target="_blank">{author.name}</a>
                <p>{post.body}</p>
              </Post>
            );
          })}
        </>
      )}
      
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const Post = styled.div`
  text-align: left;
  margin-top: 1.5rem;
  padding: 1em 0.5em;

  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%);
`;

const Form = styled.form`
  margin: 1em 0;
  padding: 0.5em;
  background-color: #eee;
  text-align: left;

  p {
    display: flex;
    justify-content: space-between;
  }
  
  p * {
    flex-basis: 50%;
  }
`;
export default App;
