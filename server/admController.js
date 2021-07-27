const banco = require("../server/config");


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
