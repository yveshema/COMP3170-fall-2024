import { useEffect } from 'react';
import './App.css';

import CustomErrorBoundary from './CustomErrorBoundary';
import Favorites from './Favorites';

function App() {


  return (
    <>
    
      <h1>Error Handling</h1>

      <Favorites />

      {/* <CustomErrorBoundary fallback={<>Error in Example</>}>
        <Example a={1n} b={0n} />
      </CustomErrorBoundary> */}
    
    </>
  );
}

function Example({ a, b}) {
  
  a / b; // division by zero will throw an error here

  let child;
  try {
    child = <Error />; // will an error be thrown here?
  } catch(e) {
    console.log(e.message);
    child = 'Safe component';
  }
  

  return (
    <>
    
      <p>Example component</p>
      <p>Hello {name}</p>
    <CustomErrorBoundary fallback={<>Something went wrong in Example</>}>
      {child}
    </CustomErrorBoundary>
    
    </>
  );
}

function Error() {
  throw new Error('some error');

  return 'Error component';
}

export default App;
