var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'tempo_slider'
});


app.get('/', function(req, res) {
  var q = "SELECT * FROM tempo";
  connection.query(q, function(err, results){
    if (err) throw err;
      res.render('index', { results });
  })   })

app.post('/', function(req, res){
  var newTempo = {
    exercise: req.body.exercise,
    date: req.body.date,
    tempo: req.body.tempo
  }

  connection.query('INSERT INTO tempo SET ?', newTempo, function(err, result) {
    if (err) throw err;
    console.log(result);
  })
})


app.listen(8080, function() {
  console.log('The server is running!');
})
