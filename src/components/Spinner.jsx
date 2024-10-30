export default function Spinner({ count, increment, decrement }){
    return (
        <div className="spinner">
            <span className="spin-button minus" onClick={decrement}>_</span>
            <span>{count}</span>
            <span className="spin-button plus" onClick={increment}>+</span>
        </div>
    );
}