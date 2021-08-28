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
const ADM = require("./admController");

// app.post("/teste", ADM.teste);

// Rotas de Sessoe
const sessoes = require("./sessoesController");

app.get("/sessoesDisponiveis/:data", sessoes.sessoesDisponiveis);

app.get("/listarSessoes", sessoes.listarSessoes);

app.post("/criarSessao", sessoes.criarSessao);

app.put("/attStatusSessao/:id", sessoes.attStatusSessao);


// Rotas de Filmes
const filmes = require("./filmesController");

app.get("/filmesEmCartaz", filmes.filmesEmCartaz);

app.get("/listarFilmes", filmes.listarFilmes);

app.post("/addFilme", filmes.addFilme);

app.put("/attStatusFilme/:id", filmes.attStatusFilme);

// Rotas de login`s
const login = require("./loginController");

app.post("/login", login.logar);

app.get("/usuarios", login.usuarios);

app.post("/addUsuario", login.addUsuario);

app.put("/attADMUsuario/:id", login.attADMUsuarios);

 module.exports = app;