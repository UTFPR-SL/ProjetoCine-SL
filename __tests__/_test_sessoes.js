console.log = function () {};

const supertest = require("supertest");
const app = require("../server/index");
const server = require("../server/index");

server.close();
app.listen(72);

function respPadrao(response) {
  if (expect(response.statusCode).toBe(200)) return false;
  if (
    expect(JSON.stringify(response.headers)).toContain(
      '"access-control-allow-headers":"Origin, X-Requested-With, Content-Type, Accept"'
    )
  )
    return false;

  return true;
}

describe("GET`s Sessões", () => {
  test("Listar as Sessões /listarSessoes", async () => {
    const response = await supertest(app).get("/listarSessoes");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].id).toBe(1);
  });
});
