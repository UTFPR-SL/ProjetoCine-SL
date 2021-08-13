console.log = function () {};

const supertest = require("supertest");
const app = require("../server/config");
const respPadrao = require("./config");

var server = app.listen(50);

describe("GET`s Sessões", () => {
  test("Listar as Sessões /listarSessoes", async () => {
    const response = await supertest(app).get("/listarSessoes");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].id).toBe(1);
  });
});

describe("Post`s Sessões", () => {
  test("Adicionar Sessão /criarSessao", async () => {
    const response = await supertest(app)
      .post("/criarSessao")
      .send({
        id_filme: "1",
        horario: "20:30",
        e3d: false,
        idioma: "legendado",
        sala: "3",
      });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe('Sessão Criada com Sucesso!');
  });
});

server.close();
