import { useEffect,  useReducer } from 'react';

import PostList from './components/PostList';

import { AppContext, appReducer } from './appContext';

import { Link, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  // const [posts, setPosts] = useState([]);
  const [posts, dispatch] = useReducer(appReducer, []);

  function getComments(comments, post) {
    return comments.filter(comment => comment.postId == post.id);
  }

  // function addComment(comment) {
  //   const post = posts.find(p => p.id == comment.postId);

  //   const comments = [...post.comments, comment];

  //   const updatedPosts = posts.map(p => {
  //     if (p.id == comment.postId) {
  //       return { ...post, comments };
  //     } else {
  //       return p;
  //     }
  //   });

  //   setPosts(updatedPosts);
  // }

  // function updateComment(comment) {
  //   const post = posts.find(p => p.id == comment.postId);

  //   const comments = post.comments.map(c => {
  //     if (c.id == comment.id) {
  //       return comment;
  //     } else {
  //       return c;
  //     }
  //   });

  //   const updatedPosts = posts.map(p => {
  //     if (p.id == comment.postId) {
  //       return { ...post, comments };
  //     } else {
  //       return p;
  //     }
  //   });

  //   setPosts(updatedPosts);
  // }

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [postsResp, commentsResp] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts'),
          fetch('https://jsonplaceholder.typicode.com/comments')
        ]);

        let posts = await postsResp.json();
        const comments = await commentsResp.json();
        posts = posts.map(post => ({...post, comments: getComments(comments, post)}));
        // setPosts(posts);
        dispatch({
          type: 'load_posts',
          payload: posts,
        });

      } catch(e) {
        console.error(e.message);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Link to="/">Home</Link>
      {/* <AppContext.Provider value={{
        posts,
        dispatch,
      }}> */}
        <Outlet context={{ posts, dispatch }} />
      {/* </AppContext.Provider> */}
      
    </div>
  );
}

export default App;
