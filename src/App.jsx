import { useEffect, useState } from 'react';
import styled from 'styled-components';

import './App.css';

function App() {
  const [articles, setArticles] = useState([]);

  const [fetchStatus, setFetchStatus] = useState('idle');

  const isLoading = fetchStatus === 'loading';

  const isError = fetchStatus === 'error';

  const [query, setQuery] = useState('');
  
  // useEffect(() => {
  //   // fetch data
  //   const url = `http://hn.algolia.com/api/v1/search?query=${query}`;

  //   async function fetchData() {
  //     let response, data;

  //     try {
  //       setFetchStatus('loading');

  //       // force a delay
  //       await new Promise(resolve => {
  //         setTimeout(resolve, 2000);
  //       });

  //       response = await fetch(url);
  //       data = await response.json();
  //       setArticles(data.hits);

  //       setFetchStatus('idle');
  //     } catch(e) {
  //       setFetchStatus('error');
  //       console.error(e.message);
  //     }
  //   }

  //   fetchData();

  // }, [query]);

  // if (isLoading) return <p>Loading...</p>;

  // if (isError) return <p>Error while loading data</p>;

  async function fetchData(url) {
    let response, data;

    try {
      setFetchStatus('loading');

      // force a delay
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });

      response = await fetch(url);
      data = await response.json();
      setArticles(data.hits);

      setFetchStatus('idle');
    } catch(e) {
      setFetchStatus('error');
      console.error(e.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const input = e.target.elements.search;

    const query = input.value;

    const url = `http://hn.algolia.com/api/v1/search?query=${query}`;

    fetchData(url);

    // setQuery(input.value);

    input.value = '';

  }

  return (
    <>
      <h1>HN Search results</h1>

      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="search..." name="search" />
        <button>Search</button>
      </Form>
      

      {isLoading ? <p>Loading...</p>
      : isError ? <p>Error while loading data</p>
      : (
        <>
          {articles.map((article, pos) => (
          <p key={pos}>
            <a href={article.url} target="_blank">{article.title}</a>
          </p>
          ))}
        </>
      )}
      
    </>
  );
}

const Input = styled.input`
  font-size: 1.5rem;
  padding: 1em 0.5em;
  border: 1px solid;
  border-radius: none;
`;

const Form = styled.form`
  display: flex;

  button {
    background-color: #000;
    color: #fff;
    border-radius: 0;
  }
`;

export default App;
