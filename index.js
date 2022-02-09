const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const dbConfig = require('./dbConfig')();
const Product = require('./models/Product');

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

const PORT = 3000;

app.get('/', (req, res) => {
  res.render('pages/add-product');
});

app.post('/', async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
  } catch (e) {
    console.log(e);
  }
});

app.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    console.log(product);
  } catch (e) {
    console.log(e);
  }
});

app.patch('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(product);
  } catch (e) {
    console.log(e);
  }
});

app.delete('/:id', async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listenoing on port ${PORT}`);
});
