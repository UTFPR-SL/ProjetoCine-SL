const banco = require("./banco");

// Listar todos os filmes em cartaz
exports.filmesEmCartaz = async (req, res) => {
  console.log("\nListando todos os filmes em cartaz!");

  banco.query(
    "SELECT id, nome FROM Filmes WHERE cartaz = true;",
    function (err, result) {
      if (err) {
        console.log("ERRO!");
        throw err;
      }
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );

      res.json(result);
    }
  );
};

// Listar todos os filmes
exports.listarFilmes = async (req, res) => {
  console.log("\nListando todos os filmes!");

  banco.query("SELECT * FROM Filmes ;", function (err, result) {
    if (err) {
      console.log("ERRO!");
      throw err;
    }
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.json(result);
  });
};

// Função Adicionar Filme
exports.addFilme = async (req, res) => {
  console.log("\nAdicionando Filme");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var data = req.body;

  console.log(data);

  banco.query(
    `SELECT * FROM Filmes WHERE nome='${data.nome}'`,
    async function (err, result) {
      if (err) {
        console.log("ERRO!\n");
        res.end("Erro ao verificar o filme no sistema");
        throw err;
      }
      if (!result.length == 0) {
        console.log("Filme já cadastrado no sistema!");
        res.end("Filme já cadastrado no sistema!");
      } else {
        banco.query(
          "INSERT INTO Filmes (nome, cartazURL, duracao, genero, classificacaoIndicativa, sinopse) VALUES (?)",
          [
            [
              data.nome,
              data.cartazURL,
              data.duracao,
              data.genero,
              data.classificacao,
              data.sinopse,
            ],
          ],
          async function (err, result) {
            if (err) {
              console.log("ERRO!\n");
              res.end("Erro ao adicionar o filme");
              throw err;
            }

            console.log("Filme adicionado com sucesso\n");

            res.write("Filme adicionado com sucesso!");
            res.end();
          }
        );
      }
    }
  );
};

// Função para mudar o status (em cartaz) do filme
exports.attStatusFilme = async (req, res) => {
  console.log("\nAtualizando Filme");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var id = req.params.id;
  console.log('ID do filme: ', id);

  banco.query(
    `SELECT * FROM Filmes WHERE id='${id}'`,
    async function (err, result) {
      if (err) {
        console.log("ERRO!\n");
        res.json({ cod: -1, msg: "Erro ao verificar o filme no sistema" });
        throw err;
      }

      if (result.length == 0) {
        console.log("Filme Inesxistente!");
        res.json({ cod: 0, msg: "Filme Inexistente!" });
      } else {
        console.log("Filme:");
        console.log(result[0]);
        var status = true;
        var sql = "";
        if (result[0].cartaz == true) status = false;
        else status = true;

        sql = `UPDATE Filmes set cartaz=${status} WHERE id='${id}'`;

        if (!status)
          sql += `;UPDATE Sessoes set status=${status} WHERE id_filme='${id}';`;
        banco.query(sql, async function (err, result) {
          if (err) {
            console.log("ERRO!\n");
            res.json({ cod: -1, msg: "Erro ao atualizar o filme!" });
            throw err;
          }
          console.log("Filme Atualizado!\n");
          var resposta = { cod: 1, msg: "Filme Atualizado!", status: status };

          if(result[1])
            resposta.sessoes=result[1].changedRows;

          res.json(resposta);
        });
      }
    }
  );
};
