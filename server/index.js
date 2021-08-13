const app = require("./config");

// Servidor escutando
var server = app.listen(80);

console.log("Servidor Escutando na porta padrão(80).");

module.exports = server;
