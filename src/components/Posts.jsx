import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Post from './Post';

export default function Posts() {
    const [posts, setPosts] = useState([]);

    const { state: user } = useLocation();

    const url = user ? `https://jsonplaceholder.typicode.com/users/${user.id}/posts?_start=0&_limit=3`
                    : "https://jsonplaceholder.typicode.com/posts";

    useEffect(() => {
        async function fetchPosts() {
            try {
                const resp = await fetch(url);
                const posts = await resp.json();
                setPosts(posts);
              } catch(e) {
                console.error(e.message);
              }
        }

        fetchPosts();
    }, [user]);

    return (
        <div className="posts">
            {user && <h3>{user.name}'s posts</h3>}
            {posts.map(post => <Post key={post.id} post={post} />)}
        </div>
    );
}