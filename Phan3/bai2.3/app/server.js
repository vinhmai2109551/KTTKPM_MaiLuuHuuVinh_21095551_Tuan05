const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Kết nối tới MongoDB bằng tên service 'mongo-db' trong docker-compose
mongoose.connect('mongodb://mongo-db:27017/testdb')
    .then(() => console.log('Connected to MongoDB!'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', (req, res) => {
    res.send('<h1>Node.js + MongoDB is working! 🚀</h1>');
});

app.listen(3000, () => console.log('App running on port 3000'));