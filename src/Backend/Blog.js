const express = require('express');
const router = express.Router();
const fs = require('fs');
//const path = require('path');
const blog = require('./blog.json'); 

const BLOG_FILE = path.join(__dirname, 'blogs.json');

// GET: Fetch all blogs
router.get('/blogs', (req, res) => {
    fs.readFile(BLOG_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading blog file" });
        }
        res.json(JSON.parse(data));
    });
});

// POST: Add a new blog
router.post('/blogs', (req, res) => {
    const newBlog = req.body;

    fs.readFile(BLOG_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading blog file" });
        }

        let blogs = JSON.parse(data);
        newBlog.id = blogs.length ? blogs[blogs.length - 1].id + 1 : 1; // Assign a new ID
        blogs.push(newBlog);

        fs.writeFile(BLOG_FILE, JSON.stringify(blogs, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error saving blog" });
            }
            res.status(200).json({ message: "Blog added", blog: newBlog });
        });
    });
});

// DELETE: Remove a blog by ID
router.delete('/blogs/:id', (req, res) => {
    const blogId = parseInt(req.params.id);

    fs.readFile(BLOG_FILE, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: "Error reading blog file" });
        }

        let blogs = JSON.parse(data);
        blogs = blogs.filter(blog => blog.id !== blogId);

        fs.writeFile(BLOG_FILE, JSON.stringify(blogs, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: "Error saving blog" });
            }
            res.json({ message: "Blog deleted" });
        });
    });
});

module.exports = router;