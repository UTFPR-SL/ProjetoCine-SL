const banco = require("../server/config.js");

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
