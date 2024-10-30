import { useEffect } from 'react';

// import './App.css';

import CustomErrorBoundary from './CustomErrorBoundary';
import Favorites from './Favorites';
import Buttons from './Buttons';
import Buttons2 from './Buttons2';

import dogs2 from './assets/dogs2.jpg';

function App() {


  return (
    <>
    
      <h1>Error Handling</h1>

      <Favorites />

      {/* <CustomErrorBoundary fallback={<>Error in Example</>}>
        <Example a={1n} b={0n} />
      </CustomErrorBoundary> */}

      <h2>Styling using CSS modules</h2>
      <Buttons />

      <h2>Styling using Styled Components</h2>
      <Buttons2 />

      <div>
        <img src={dogs2} width="300" /> {/** don't do this: src="./assets/dogs2.jgp" */}

        <img src="/dogs1.jpg" width="300" />
      </div>
    
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
