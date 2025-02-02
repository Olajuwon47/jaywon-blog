const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const blogRoutes = require('./Blog'); // Correct import for the router

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/blogs', express.static(path.join(__dirname, 'public', 'Data', 'blogs.json')));

app.get('/', (req, res) => {
    res.send('Server is running. Use /api/blogs to access blog data.');
  });

  app.post('/', (req, res) => {
    res.send('Server is running. Use /api/blogs to access blog data.');
  });

  app.delete('/', (req, res) => {
    res.send('Server is running. Use /api/blogs to access blog data.');
  });


app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});