// app.js
const express = require('express');
const cors = require('cors');
const blogs = require('./data/blogs');

const app = express();
const PORT = 8080;

app.use(cors()); // Cho phép frontend gọi API từ domain khác

// API 1: Lấy danh sách blog
app.get('/api/blogs', (req, res) => {
  const blogList = blogs.map(({ id, slug, title }) => ({ id, slug, title }));
  res.json(blogList);
});

// API 2: Lấy chi tiết blog theo id hoặc slug
app.get('/api/blogs/:key', (req, res) => {
  const key = req.params.key;
  const blog = blogs.find(
    b => b.id.toString() === key || b.slug === key
  );
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Không tìm thấy bài viết' });
  }
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
