const banco = require("./config.js");

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
        res.json([{ cod: 1, mensagem:"Usuário errado"}]);
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
              res.json([{ cod: 2, mensagem:"Senha errada"}]);
            } else {
                console.log("Login Autorizado");
                result[0].cod=0;
              res.json(result);
            }
          }
        );
      }
    }
  );
};
