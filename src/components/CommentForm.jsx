export default function CommentForm({ onSubmit, comment }){
    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" defaultValue={comment?.email} />
            </div>
            <div>
                <label htmlFor="body">Comment:</label>
                <textarea rows="5" name="body" defaultValue={comment?.body} />
            </div>
            <button>Submit</button>
        </form>
    );
}