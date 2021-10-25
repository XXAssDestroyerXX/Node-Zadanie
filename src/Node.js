//Serwer
const express = require('express');
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
var url = "mongodb+srv://Kacper:<Minecraft123>@cluster0.hndhl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const app = express();
let db;
let studentCollection;

MongoClient.connect(url, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    db = client.db('Cluster0')
    studentCollection = db.collection('studenci')
  })
app.listen(5000, function () {
  console.log('5000')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  db.collection('studenci').find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
})

app.use(bodyParser.urlencoded({ extended: true }))
app.post('studenci', (req, res) => {

  studentCollection.insertOne(req.body)
    .then(result => {
      res.redirect('/')
      console.log(result)
    })
    .catch(error => console.error(error))
})