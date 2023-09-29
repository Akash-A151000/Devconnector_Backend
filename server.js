const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config();

connectDB();
const port = https://devconnector-7z7s.onrender.com;

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(port, () => console.log(`Server Started on port no ${port}`));
