const banco = require("../server/config");


// Listar todas as sessoes
exports.listarSessoes = async (req, res) => {
  console.log("Listando Sessões Disponíveis");
  
  var sql = "SELECT Sessoes.id, horario, 3d, idioma, qtd_lugares, nome,duracao, "+
  "classificacaoIndicativa FROM Sessoes "+
  "INNER JOIN Filmes "+
  "ON Sessoes.id_filme = Filmes.id "+
  "WHERE status = true;";

  banco.query(sql, function (err, result) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    res.json(result);
  });
    
};

