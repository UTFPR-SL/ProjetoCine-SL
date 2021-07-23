var filme = document.getElementById("filme").value;
var horario = document.getElementById("horario").value;
var td = document.getElementById("3d").value;
var idioma = document.getElementById("idioma").value;
var sala = document.getElementById("sala").value;

console.log("filme");
console.log(filme);

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Cinema"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Conectado!");
    var sql = "INSERT INTO Sessoes (id_filme, horario, 3d, idioma, sala, qtd_lugares) VALUES ?";
    var values = [filme,horario,td,idioma,sala,30];
    con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
    });