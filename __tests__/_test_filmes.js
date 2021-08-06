console.log = function() {}

const supertest = require("supertest");
const app = require("../server/index");
const server = require("../server/index");

server.close();
app.listen(70);

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

describe("GET`s Filmes", () => {
  test("Listar os filmez em cartaz /filmesEmCartaz", async () => {
    const response = await supertest(app).get("/filmesEmCartaz");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(
      `[{"id":1,"nome":"Viúva Negra"},{"id":2,"nome":"Vingadores: Guerra Infinita"},{"id":3,"nome":"Velozes e Furiosos 9"}`
    );
  });
});

describe("Post`s Filmes", () => {
  test("Adicionar Filme /addFilme", async () => {
    const response = await supertest(app).post("/addFilme").send({
      nome: "Velozes e Furiosos 9",
      cartazURL:
        "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg",
      duracao: "2h 25min",
      genero: "Ação/Aventura",
      classificacaoIndicativa: 12,
      sinopse:
        "O longa vem dando continuidade às corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Filme adicionado com sucesso!");
  });
});
