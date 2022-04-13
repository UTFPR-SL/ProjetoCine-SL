var mysql = require("mysql");
var banco = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "Cinema",
  multipleStatements: true
});

banco.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = banco;
