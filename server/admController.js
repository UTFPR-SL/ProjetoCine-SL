const banco = require("../server/config");

// Função teste / Adiciona usuario
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
    var sala = parseInt(sql[5], 10);
    var e3d = false;
    if (sql[3] == 'true') e3d = true;

    banco.query("INSERT INTO Sessao (id_filme, horario, 3d, idioma, sala) VALUES (?)", [[ id_filme, sql[1], e3d, sql[4], sala ]], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });

    res.end();
  });


};




// // Função teste / Adiciona usuario
// exports.teste = async (req, res) => {
//   console.log("rota test");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );

//   let data = "";
//   req.on("data", (chunk) => {
//     data += chunk;
//   });

//   req.on("end", () => {
//     var string = data.replace("[", "");
//     string = string.replace("]", "");
//     var sql = string.split(", ");

//     var adm = false;
//     if (sql[3] == 'true') adm = true;

//     banco.query("INSERT INTO login (nome, usuario, senha, adm) VALUES (?)", [[sql[0], sql[1], sql[2], adm]], function (err, result) {
//       if (err) throw err;
//       console.log("Number of records inserted: " + result.affectedRows);
//     });

//     res.end();
//   });


// };
