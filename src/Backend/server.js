const express = require('express'); 
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const blogRoutes = require('./Blog'); // Correct import for the router

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/Date', express.static(path.join(__dirname, 'public', 'Data', 'blog.json')));

app.get('/', (req, res) => {
    res.send('Server is running. Use /api/products to access product data.');
  });

  app.post('/', (req, res) => {
    res.send('Server is running. Use /api/products to access product data.');
  });

  app.delete('/', (req, res) => {
    res.send('Server is running. Use /api/products to access product data.');
  });


app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});