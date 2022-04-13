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

// Inserindo a compra e os ingressos vendidos em uma compra
exports.compraDosIngressos = async (req, res) => {
  var compra = req.body;

  console.log(`\nInserindo a compra no banco`);

  console.log(compra);
  for (let i = 0; i < compra[0].ingressos.length; i++) {
    const ingresso = compra[0].ingressos[i];
    console.log(ingresso);
  }
  banco.query(
    `INSERT INTO Compra (id_vendedor, cliente, cpf, qtd_ingressos, valor)
  VALUES (?)`,
    [
      [
        compra[0].id_vendedor,
        compra[0].cliente,
        compra[0].cpf,
        compra[0].qtd_ingressos,
        compra[0].valor,
      ],
    ],
    function (err, result) {
      if (err) throw err;
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      banco.query(
        `SELECT id FROM Compra WHERE id_vendedor=${compra[0].id_vendedor} ORDER BY id DESC LIMIT 1`,
        function (err, id_compra) {
          console.log(id_compra[0].id);

          var ingressos = [];

          for (var i = 0; i < compra[0].ingressos.length; i++)
            ingressos.push([
              id_compra[0].id,
              compra[0].id_sessao,
              compra[0].data,
              compra[0].ingressos[i].cod_assento,
              compra[0].ingressos[i].meia,
            ]);

          banco.query(
            "INSERT INTO Ingressos (id_compra, id_sessao, data, cod_assento, meia) VALUES ?",
            [ingressos],
            function (err, result) {
              if (err) throw err;
              res.json(id_compra[0].id);
            }
          );
        }
      );
    }
  );
};
