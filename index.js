const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const dbConfig = require('./dbConfig')();
const Product = require('./models/Product');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/admin', (req, res) => {
  res.render('admin/index');
});

app.get('/admin/dashboard', (req, res) => {
  res.render('admin/dashboard');
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server listenoing on port ${PORT}`);
});
