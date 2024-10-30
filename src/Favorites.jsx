import { useState, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import './App.css';

import styles from './example.module.css';


const forbidden = [
    'violence',
    'crime',
    'jealousy',
    'cruelty'
];

function FavoriteList({ favorites }) {
    return (
        <>
            <h3>My favorite things</h3>

            <ul>
                {favorites.map((item, index) => {
                    if (forbidden.includes(item)) {
                        throw new Error(`"${item}" not allowed as favorite`);
                    }

                    return <li key={index}>{item}</li>
                })}
            </ul>
        </>

    );
}

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    const prevStateRef = useRef();

    function add(item) {
        // save previous state before updating it
        prevStateRef.current = [...favorites];

        setFavorites([...favorites, item]);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const input = e.target.elements.favorite; // gives us the text input

        add(input.value);

        input.value = '';
    }

    return (
        <div>
            <form className={styles['my-form']} onSubmit={handleSubmit}>
                <input type="text" name="favorite" />
                <button>Submit</button>
            </form>

            <ErrorBoundary 
                FallbackComponent={FallbackComponent}
                onReset={() => {
                    // restore previous state
                    setFavorites([...prevStateRef.current]);
                }}>
                <FavoriteList favorites={favorites} />
            </ErrorBoundary>
        </div>
    );
}

function FallbackComponent({ error, resetErrorBoundary }){
    return (
        <>
            <p style={{
                color: 'red',
                border: '1px solid red',
                padding: '1em'
            }}>
                {error.message}
            </p>

            <button onClick={resetErrorBoundary}>Try again</button>
        </>
    );
}