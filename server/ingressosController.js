const banco = require("./banco");

exports.ingressosIndisponiveis = async (req, res) => {
    var id = req.params.id;
    var data = req.params.data;

  console.log(`\nListando Assentos ocupados da sessão ${id} do dia ${data}`);

  banco.query(`SELECT cod_assento FROM Ingressos WHERE id_sessao=${id} AND data='${data}';`, function (err, result) {
    if (err) throw err;
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    res.json(result);
  });
};
