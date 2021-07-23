const banco = require("../server/config");



exports.test = async (req, res) => {
  console.log("rota test");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var values = [
    ['John', 'Highway 71', "asd", false],
    ['Johnie', 'Highway 72', "asds", false]
  ];
  let data = '';
  req.on('data', async chunk => {
    data += await chunk;
  })
  console.log(data); // 'Buy the milk'
  req.on('end', () => {
    // console.log(data); // 'Buy the milk'
    // console.log(JSON.parse(data)); // 'Buy the milk'
    // console.log(JSON.parse(data).todo); // 'Buy the milk'



    // banco.query("INSERT INTO login (nome, usuario, senha, adm) VALUES ?", [data], function (err, result) {
    //   if (err) throw err;
    //   console.log("Number of records inserted: " + result.affectedRows);
    // });



    res.end();
  })
  
  console.log(data);



console.log("asdadsadsadsadsa");

};