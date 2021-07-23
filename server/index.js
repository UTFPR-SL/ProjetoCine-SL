var express = require("express");
var app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);


// Rotas de Administradores
const ADM = require("../server/admController");

// app.post("/teste", ADM.teste);


// Rotas de Sessoe
const sessoes = require("../server/sessoesController");

app.get("/listarSessoes", sessoes.listarSessoes);

app.post("/criarSessao", sessoes.criarSessao);


// Servidor escutando
app.listen(80);

console.log("Servidor Escutando na porta padrão(80).");
