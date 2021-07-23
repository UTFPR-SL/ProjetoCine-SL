var express = require("express");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// Rotas de Sessoe
const sessoes = require("../server/sessoesController");

app.get("/listarSessoes", sessoes.listarSessoes);



// Servidor escutando
app.listen(80);

console.log("Servidor Escutando na porta padrão(80).");
