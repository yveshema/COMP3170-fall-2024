import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
// import './index.css';

import profile from './data/profile';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChakraProvider>
      <App data={profile} />
    </ChakraProvider>
  </StrictMode>,
);
