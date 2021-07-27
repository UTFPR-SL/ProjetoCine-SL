const { json } = require("body-parser");
const banco = require("../server/config");


// Listar todas as sessoes
exports.listarSessoes = async (req, res) => {
  console.log("\nListando Sessões Disponíveis");

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
  console.log("\nCriando uma sessão nova");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  console.log("\nCriando nova sessão");

  var data = req.body;

  banco.query(
    "INSERT INTO Sessoes (id_filme, horario, e3d, idioma, sala) VALUES (?)",
    [[data.id_filme, data.horario, data.e3d, data.idioma, data.sala]],
    async function (err, result) {
      if (err) {
        console.log("ERRO!\n");
        res.end("Erro ao criar a sessão");
        throw err;
      }

      console.log("Sesao criada com sucesso\n");

      res.write("Sessão Criada com Sucesso!");
      res.end();
    }
  );
};