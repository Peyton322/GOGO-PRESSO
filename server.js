const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'gogo_presso'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

app.post('/reserve', (req, res) => {
  const { name, email, phone, people, date, time, message } = req.body;
  const sql = 'INSERT INTO reservations (name, email, phone, people, reservation_date, reservation_time, message) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, people, date, time, message], (err, result) => {
    if (err) {
      console.error('Error inserting reservation:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Reservation saved successfully');
  });
});

app.post('/order', (req, res) => {
  const { name, phone, email, product, size, type, quantity } = req.body;
  const sql = 'INSERT INTO orders (name, phone, email, product, size, type, quantity) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, phone, email, product, size, type, quantity], (err, result) => {
    if (err) {
      console.error('Error inserting order:', err);
      res.status(500).send('Server error');
      return;
    }
    res.status(200).send('Order saved successfully');
  });
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
