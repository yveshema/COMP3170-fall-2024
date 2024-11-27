import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
import App from './App.jsx';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import PostList from './components/PostList';
import PostPage from './components/PostPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<PostList />} />
          <Route path="posts/:postId" element={<PostPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
