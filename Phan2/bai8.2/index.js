const express = require('express');
const mysql = require('mysql2');
const app = express();

// Kết nối đến MySQL (sử dụng tên service 'db-mysql' trong docker-compose)
const connection = mysql.createConnection({
    host: 'db-mysql',
    user: 'root',
    password: 'password123',
    database: 'test_db'
});

app.get('/', (req, res) => {
    connection.query('SELECT "Kết nối MySQL thành công!" AS message', (err, results) => {
        if (err) {
            res.status(500).send('Lỗi kết nối: ' + err.message);
        } else {
            res.send(results[0].message);
        }
    });
});

app.listen(3000, () => console.log('Node app chạy ở port 3000'));