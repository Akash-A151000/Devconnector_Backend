const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const port = process.env.BACKEND;

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));

app.use(cors());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, () => console.log(`Server Started on port no ${port}`));
