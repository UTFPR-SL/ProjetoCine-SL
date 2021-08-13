const banco = require("./banco");

// Realizar Login
exports.logar = async (req, res) => {
  console.log("\nBuscando usuário no banco");

  banco.query(
    `SELECT nome, usuario, adm FROM login WHERE usuario='${req.body.usuario}';`,
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

      if (result[0] == undefined) {
        console.log("Usuário errado");
        res.json([{ cod: 1, mensagem: "Usuário errado" }]);
      } else {
        console.log("Verificando senha");

        banco.query(
          `SELECT nome, usuario, adm FROM login WHERE usuario='${req.body.usuario}' AND senha='${req.body.senha}';`,
          function (err, result) {
            if (err) {
              console.log("ERRO!");
              throw err;
            }

            if (result[0] == undefined) {
              console.log("Senha errada");
              res.json([{ cod: 2, mensagem: "Senha errada" }]);
            } else {
              console.log("Login Autorizado");
              result[0].cod = 0;
              res.json(result);
            }
          }
        );
      }
    }
  );
};

exports.usuarios = async (req, res) => {
  console.log("\nListando Usuários cadastrados");

  banco.query("SELECT nome, usuario, adm FROM login;", function (err, result) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.json(result);
  });
};

exports.addUsuario = async (req, res) => {
  console.log("\nAdicionando usuario");
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  var data = req.body;

  console.log(
    `\nNome: ${data.nome}\nUsuário: ${data.usuario}\nAdministrador: ${data.adm}\n`
  );

  banco.query(
    `SELECT usuario FROM login where usuario='${req.body.usuario}'`,
    function (err, result) {
      if (err) {
        console.log("ERRO!");
        throw err;
      }

      if (result[0] != undefined) {
        console.log("Usuário Indisponível");
        res.end("Usuário Indisponível");
      } else {
        banco.query(
          "INSERT INTO login (nome, usuario, senha, adm) VALUES (?)",
          [[data.nome, data.usuario, data.senha, data.adm]],
          async function (err, result) {
            if (err) {
              console.log("ERRO!\n");
              res.end("Erro ao adicionar o usuário");
              throw err;
            }

            console.log("Usuário adicionado com sucesso\n");

            res.write("Usuário adicionado com sucesso!");
            res.end();
          }
        );
      }
    }
  );
};
