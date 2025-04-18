import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BlogDetail() {
  const { key } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/blogs/${key}`)
      .then(res => {
        if (!res.ok) throw new Error("Không tìm thấy bài viết");
        return res.json();
      })
      .then(data => setBlog(data))
      .catch(err => setError(err.message));
  }, [key]);

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
