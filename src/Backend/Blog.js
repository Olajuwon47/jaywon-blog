const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
//const blog = require('./blog.json'); 

const BLOG_FILE = path.join(__dirname, 'blogs.json');

if (!fs.existsSync(BLOG_FILE)) {
  fs.writeFileSync(BLOG_FILE, '[]', 'utf8');
}

let blog = require('./blogs.json');

// GET: Fetch all blogs
router.get('/', (req, res) => {
    res.json(blog);
});

// POST: Add a new blog
router.post('/', (req, res) => {
    const newBlog ={
    id: Date.now().toString(),
    ...req.body,
  };
  blog.push(newBlog);
  fs.writeFileSync(BLOG_FILE, JSON.stringify(blog, null, 2));
  res.status(201).json(newBlog);
});

// DELETE: Remove a blog by ID
router.delete('/:id', (req, res) => {
    //const blogId = parseInt(req.params.id);
    const { id } = req.params;
  blog = blog.filter(blog => blog.id !== id);
  fs.writeFileSync(BLOG_FILE, JSON.stringify(blog, null, 2));
  res.status(204).send();
});

module.exports = router;