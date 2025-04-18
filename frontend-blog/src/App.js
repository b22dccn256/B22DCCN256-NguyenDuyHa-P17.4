import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import BlogList from './BlogList';
import BlogDetail from './BlogDetail';

function App() {
  return (
    <div className="App">
      <h1>Blog App</h1>
      <nav>
        <Link to="/">Trang chủ</Link>
      </nav>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blog/:key" element={<BlogDetail />} />
      </Routes>
    </div>
  );
}

export default App;
