import { useState, useContext } from 'react';
import { nanoid } from 'nanoid';
import Comment from './Comment';
import CommentForm from './CommentForm';

import { useParams } from 'react-router-dom';

import { AppContext } from '../appContext';

import { useOutletContext } from 'react-router-dom';

export default function PostPage() {
    const [editing, setEditing] = useState(false);

    // const { posts, dispatch } = useContext(AppContext);
    const { posts, dispatch } = useOutletContext();

    const { postId } = useParams();

    const post = posts.find(p => p.id == postId);

    function onSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);

        const newComment = {
            id: nanoid(),
            postId: post.id,
            email: data.get('email'),
            body: data.get('body'),
        };

        // addComment(newComment);
        dispatch({
            type: 'add_comment',
            payload: newComment,
        });

        setEditing(false);
    }

    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div className="comments">
                {post.comments.map((comment, index) => (
                    <Comment key={comment.id} comment={comment} pos={++index} />
                ))}
            </div>
            {editing ? <CommentForm onSubmit={onSubmit} />
            : <button className="edit-btn" onClick={() => setEditing(true)}>Add a comment</button>
            }
        </div>
    );
}