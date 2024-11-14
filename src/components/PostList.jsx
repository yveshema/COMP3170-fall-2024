import Post from './Post';

export default function PostList({ posts, loading }){

    if (loading) return <p>Loading...</p>;

    return (
        <>
        {posts.length > 0 && (
            <div className="posts" data-testid="posts">
                {posts.map(post => <Post key={post.id} post={post} />)}
            </div>
        )}
        </>
    );
}