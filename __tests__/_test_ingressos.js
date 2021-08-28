console.log = function () {};

const supertest = require("supertest");
const respPadrao = require("./config");
const app = require("../server/config");
const banco = require("../server/banco");

var server = app.listen(53);

describe("GET Listar os Assentos Ocupados /ingressosIndisponiveis", () => {
  test("Listar os Assentos Ocupados", async () => {
    const response = await supertest(app).get("/ingressosIndisponiveis/1/2021-09-03");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(`[{`);
    expect(JSON.stringify(response.body)).toContain(`}]`);
  });
});

server.close();
