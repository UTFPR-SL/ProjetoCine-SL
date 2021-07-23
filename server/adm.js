const banco = require("../server/config");
const admController = require("../server/admController");

console.log("Abriu!");

var express = require("express");
var app = express();



app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())

  
app.get("/select", admController.select); 

app.post("/test", admController.test); 

app.listen(80);
