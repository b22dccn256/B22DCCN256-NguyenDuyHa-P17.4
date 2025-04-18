import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/blogs')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(err => console.error('Lỗi:', err));
  }, []);

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
