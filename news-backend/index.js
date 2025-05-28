
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const newsRoutes = require('./routes/news');

const app = express();
app.use(cors()); // Allow requests from React frontend
app.use('/api/news', newsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
