console.log = function () {};

const supertest = require("supertest");
const app = require("../server/index");
const respPadrao = require("./config");
const server = require("../server/index");

describe("GET`s Sessões", () => {
  test("Listar as Sessões /listarSessoes", async () => {
    const response = await supertest(app).get("/listarSessoes");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].id).toBe(1);
  });
});

server.close();
