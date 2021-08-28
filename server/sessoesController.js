const banco = require("./banco");

// Listar todas as sessoes disponíveis
exports.sessoesDisponiveis = (req, res) => {
  console.log("\nListando Sessões Disponíveis");
  var data = req.params.data;

  var sql = `SELECT Filmes.nome, Filmes.duracao, Filmes.genero,
  Filmes.classificacaoIndicativa, Filmes.sinopse, Filmes.cartazURL,
  Sessoes.id, Sessoes.horario, Sessoes.e3d, Sessoes.idioma, Sessoes.sala
  FROM Sessoes INNER JOIN Filmes ON Sessoes.id_filme = Filmes.id
  WHERE status = true;`;

  banco.query(sql, function (err, sessoes) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    var wait = 0;
    var lugares = 0;
    banco.query(
      "SELECT count(*) AS lugares FROM Assentos",
      function (err, result) {
        if (err) throw err;
        lugares = result[0].lugares;

        for (let i = 0; i < sessoes.length; i++) {
          const element = sessoes[i];

          banco.query(
            `SELECT ${lugares}-count(Ingressos.id_sessao) AS lugares
            FROM Ingressos WHERE id_sessao = ${element.id} AND data='${data}'`,
            function (err, result) {
              if (err) throw err;

              element.qtd_lugares = result[0].lugares;
              wait++;
              
              if (sessoes.length == wait) res.json(sessoes);
            }
          );
        }
      }
    );
  });
};

// Listar todas as sessoes
exports.listarSessoes = async (req, res) => {
  console.log("\nListando Sessões");

  var sql = `SELECT Filmes.nome, Filmes.duracao, Filmes.genero,
  Filmes.classificacaoIndicativa, Filmes.sinopse, Filmes.cartazURL,
  Sessoes.id, Sessoes.status, Sessoes.horario, Sessoes.e3d, Sessoes.idioma, Sessoes.sala
  FROM Sessoes INNER JOIN Filmes ON Sessoes.id_filme = Filmes.id ;`;

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
  console.log("\nCriando nova sessão");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var data = req.body;

  console.log(data);

  banco.query(
    `select * from filmes where id=${data.id_filme}`,
    async function (err, result) {
      if (err) {
        console.log("ERRO!\n");
        res.end("Erro ao verificar o filme");
        throw err;
      }

      if (result.length == 0) {
        console.log("Filme Inexistente!");
        res.end("Filme Inexistente!");
      } else {
        if (result[0].cartaz == 0) {
          console.log("Filme Indisponível/Fora de cartaz!");
          res.end("Filme Indisponível/Fora de cartaz!");
        } else {
          banco.query(
            "INSERT INTO Sessoes (id_filme, horario, e3d, idioma, sala) VALUES (?)",
            [[data.id_filme, data.horario, data.e3d, data.idioma, data.sala]],
            async function (err, result) {
              if (err) {
                console.log("ERRO!\n");
                res.end("Erro ao criar a sessão");
                throw err;
              }

              console.log("Sessãao criada com sucesso\n");

              res.write("Sessão Criada com Sucesso!");
              res.end();
            }
          );
        }
      }
    }
  );
};

// Função para mudar o status (em cartaz) da Sessão
exports.attStatusSessao = async (req, res) => {
  console.log("\nAtualizando a Sessão");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var id = req.params.id;
  console.log("ID da Sessão: ", id);

  banco.query(
    `SELECT * FROM Sessoes INNER JOIN Filmes ON Sessoes.id_filme = Filmes.id WHERE Sessoes.id='${id}'`,
    async function (err, result) {
      if (err) {
        console.log("ERRO!\n");
        res.json({ cod: -1, msg: "Erro ao verificar a sessão no sistema" });
        throw err;
      }

      if (result.length == 0) {
        console.log("Sessão Inesxistente!");
        res.json({ cod: 0, msg: "Sessão Inexistente!" });
      } else {
        console.log("Sessão:");
        console.log(result[0]);

        var status = true;
        var id_filme = result[0].id_filme;
        var filme = result[0].nome;
        var sql = "";

        if (result[0].status == true) status = false;
        else status = true;

        sql = `UPDATE Sessoes set status=${status} WHERE id='${id}'`;

        if (status)
          sql += `;UPDATE Filmes set cartaz=${status} WHERE id='${id_filme}';`;

        banco.query(sql, async function (err, result) {
          if (err) {
            console.log("ERRO!\n");
            res.json({ cod: -1, msg: "Erro ao atualizar a Sessão!" });
            throw err;
          }
          console.log("Sessão Atualizado!\n");
          var resposta = { cod: 1, msg: "Sessão Atualizado!", status: status };

          if (result[1]) if (result[1].changedRows == 1) resposta.filme = filme;

          res.json(resposta);
        });
      }
    }
  );
};
