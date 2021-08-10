var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// Rotas de Administradores
const ADM = require("../server/admController");

// app.post("/teste", ADM.teste);

// Rotas de Sessoe
const sessoes = require("../server/sessoesController");

app.get("/listarSessoes", sessoes.listarSessoes);

app.post("/criarSessao", sessoes.criarSessao);

// Rotas de Filmes
const filmes = require("./filmesController");

app.get("/filmesEmCartaz", filmes.filmesEmCartaz);

app.get("/listarFilmes", filmes.listarFilmes);

app.post("/addFilme", filmes.addFilme);

// Rotas de login`s
const login = require("./loginController");

app.post("/login", login.logar);

app.get("/usuarios", login.usuarios);

app.post("/addUsuario", login.addUsuario);

// Servidor escutando
var server = app.listen(80);

console.log("Servidor Escutando na porta padrão(80).");

module.exports = app;
module.exports = server;
