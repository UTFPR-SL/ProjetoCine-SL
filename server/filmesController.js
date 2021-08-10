const banco = require("./config.js");

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


exports.listarFilmes = async (req, res) => {
  console.log("\nListando todos os filmes!");

  banco.query(
    "SELECT * FROM Filmes ;",
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
    "INSERT INTO Filmes (nome, cartazURL, duracao, genero, classificacaoIndicativa, sinopse) VALUES (?)",
    [[data.nome, data.cartazURL, data.duracao, data.genero, data.classificacao, data.sinopse]],
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
};

