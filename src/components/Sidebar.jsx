import { Link } from 'react-router-dom';

export default function Sidebar({ users }) {
    return (
        <div className="sidebar">
            <h2>Browse by user</h2>
            <nav>
                {users.map(user => (
                    <Link to={`users/${user.id}`} state={user}>
                        {user.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}