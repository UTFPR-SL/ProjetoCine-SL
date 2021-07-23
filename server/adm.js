const banco = require("../server/config");
const admController = require("../server/admController");
const sessoes = require("../server/admController");

var express = require("express");
var app = express();

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
app.use(express.json())

  
app.post("/test", admController.test); 

app.get("/listarSessoes", sessoes.listarSessoes); 


app.listen(80);
