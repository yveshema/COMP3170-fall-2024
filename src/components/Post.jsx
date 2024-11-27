import { Link } from 'react-router-dom';

export default function Post({ post }) {
    return (
        <div className="post">
            <h2>
                <Link to={`posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.body}</p>
        </div>
    );
}