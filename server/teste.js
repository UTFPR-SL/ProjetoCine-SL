
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Cinema"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
 
});


var express = require('express');
var app = express();


app.get('/test', function (req, res) {
  console.log('rota test');
  
  
    con.query("SELECT * FROM Lugares", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    });
    
    console.log("asdadsadsadsadsa");
});


app.listen(80);