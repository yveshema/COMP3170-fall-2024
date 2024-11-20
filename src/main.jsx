import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Posts from './components/Posts';
import UserProfile from './components/UserProfile';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Posts />} />
          <Route path="users" element={<p>Users</p>} />
          {/* <Route path="users/:userid" element={<UserProfile />} />
          <Route path="users/:userid/posts" element={<Posts />} /> */}
          <Route path="users/:userId">
            <Route index element={<UserProfile />} />
            <Route path="posts" element={<Posts />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
