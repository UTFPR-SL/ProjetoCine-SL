const banco = require("../server/config");

// Listar todas as sessoes
exports.listarSessoes = async (req, res) => {
  console.log("Listando Sessões Disponíveis");

  var sql =
    "SELECT Sessoes.id, horario, 3d, idioma, qtd_lugares, nome,duracao, " +
    "classificacaoIndicativa FROM Sessoes " +
    "INNER JOIN Filmes " +
    "ON Sessoes.id_filme = Filmes.id " +
    "WHERE status = true;";

  banco.query(sql, function (err, result) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.json(result);
  });
};

// Função Criar Sessao
exports.criarSessao = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  let data = "";
  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    var string = data.replace("[", "");
    string = string.replace("]", "");
    var sql = string.split(", ");

    var id_filme = parseInt(sql[0], 10);
    var sala = parseInt(sql[4], 10);
    var e3d = false;
    if (sql[3] == "true") e3d = true;

    banco.query(
      "INSERT INTO Sessoes (id_filme, horario, 3d, idioma, sala) VALUES (?)",
      [[id_filme, sql[1], e3d, sql[3], sala]],
      function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      }
    );

    res.end();
  });
};
