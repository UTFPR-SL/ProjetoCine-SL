const banco = require("./banco");

// Listando assentos ocupados na sessão
exports.ingressosIndisponiveis = async (req, res) => {
  var id = req.params.id;
  var data = req.params.data;

  console.log(`\nListando Assentos ocupados da sessão ${id} do dia ${data}`);

  banco.query(
    `SELECT cod_assento FROM Ingressos WHERE id_sessao=${id} AND data='${data}';`,
    function (err, result) {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );

      res.json(result);
    }
  );
};

// Listando ingressos vendidos em uma compra
exports.ingressosVendidos = async (req, res) => {
  var id = req.params.id;

  console.log(`\nListando Ingressos da compra ${id}`);

  banco.query(`SELECT * FROM Compra WHERE id=${id};`, function (err, compra) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    console.log(compra);

    if (compra.length == 0) {
      console.log("Compra Inexistente!");
      res.end("Compra Inexistente!");
    } else {
      banco.query(
        `SELECT * FROM Ingressos WHERE id_compra=${id};`,
        function (err, ingressos) {
          if (err) throw err;

          var result = JSON.stringify(compra);
          result = result.substr(0, result.length - 2);
          result += `,"ingressos":`;
          result += JSON.stringify(ingressos);
          result += "}]";
          result = JSON.parse(result);

          res.json(result);
        }
      );
    }
  });
};
