//Serwer

const express = require('express');
const path = require('path')
const path = require('hbs');
const hbs = require('hbs');

const app = express();

app.set('views', './src/views');
hbs.registerPartials(path.join(__dirname, 'view/partials'));
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("index", {});
});

app.get('/', (req, res) => {
  res.send("Strona 2");
});

app.get('/3', (req, res) => {
  res.send("Strona 3");
});

app.get('/', (req, res) => {
  res.send("Strona 4");
});

app.listen(5000, () => {
  console.log("Serwer działa")


});