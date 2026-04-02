const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Chào mừng bạn đến với ứng dụng Node.js trong Docker!</h1>');
});

app.listen(3000, () => {
    console.log('App đang chạy tại cổng 3000');
});