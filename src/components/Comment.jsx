import { useState, useContext } from 'react';

import CommentForm from './CommentForm';

import { AppContext } from '../appContext';

import { useOutletContext } from 'react-router-dom';

export default function Comment({ comment, pos }) {
    const [editing, setEditing] = useState(false);

    // const { dispatch } = useContext(AppContext);
    const { dispatch } = useOutletContext();

    function onSubmit(e) {
        e.preventDefault();
        setEditing(false);

        const data = new FormData(e.target);

        const updatedComment = {
            ...comment,
            email: data.get('email'),
            body: data.get('body'),
        };

        // updateComment(updatedComment);
        dispatch({
            type: 'update_comment',
            payload: updatedComment,
        });
    }

    if (editing) return <CommentForm onSubmit={onSubmit} comment={comment} />;

    return (
        <div className="comment">
            <span>{pos}</span>
            <p>
                {comment.body} - <span className="commenter">{comment.email}</span>
                <button className="edit-btn" onClick={() => setEditing(true)}>edit</button>
            </p>
        </div>
    );
}