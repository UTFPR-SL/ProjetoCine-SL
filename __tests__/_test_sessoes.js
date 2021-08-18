console.log = function () {};

const supertest = require("supertest");
const respPadrao = require("./config");
const app = require("../server/config");
const banco = require("../server/banco");

var server = app.listen(52);

var id_indisponivel = 0;
var id_inesxistente = 0;

beforeAll(async () => {
  await banco.query(
    "insert into filmes (nome, cartaz, cartazURL, duracao, genero, classificacaoIndicativa, sinopse) values ('Filme Teste', '0', 'sem foto', '0h 10min', 'testes', 'Livre', 'Adicionando filme para teste')"
  );
  await banco.query(
    "select * from filmes order by id desc limit 1",
    async function (err, result) {
      id_inesxistente = result[0].id + 10;
    }
  );
  await banco.query(
    "select * from filmes where nome='Filme Teste'",
    async function (err, result) {
      id_indisponivel = result[0].id;
    }
  );
});

afterAll(async () => {
  await banco.query("delete from sessoes order by id desc limit 1");
  await banco.query("delete from Filmes order by id desc limit 1");
});

describe("GET Listar as Sessões /listarSessoes", () => {
  test("Listar as Sessões", async () => {
    const response = await supertest(app).get("/listarSessoes");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(`[{"id":`);
    expect(JSON.stringify(response.body)).toContain(`,"cartazURL":"`);
    expect(JSON.stringify(response.body)).toContain(`,"horario":"`);
    expect(JSON.stringify(response.body)).toContain(`,"e3d":`);
    expect(JSON.stringify(response.body)).toContain(`,"idioma":"`);
    expect(JSON.stringify(response.body)).toContain(`,"qtd_lugares":`);
    expect(JSON.stringify(response.body)).toContain(`,"nome":"`);
    expect(JSON.stringify(response.body)).toContain(`,"duracao":"`);
    expect(JSON.stringify(response.body)).toContain(
      `,"classificacaoIndicativa":"`
    );
    expect(JSON.stringify(response.body)).toContain(`}]`);
  });

  test("Listar as Sessões (Primeira sessao)", async () => {
    const response = await supertest(app).get("/listarSessoes");
    const result = await banco.query(
      "select * from sessoes where status=1 order by id_filme asc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[0].id).toBe(result[0].id);
      }
    );
  });
  test("Listar as Sessões (Ultima sessao)", async () => {
    const response = await supertest(app).get("/listarSessoes");
    const result = await banco.query(
      "select * from sessoes where status=1 order by id_filme desc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[response.body.length - 1].id).toBe(
          result[0].id_filme
        );
      }
    );
  });
});

describe("Post Adicionar Sessão /criarSessao", () => {
  test("Adicionar Sessão (Filmes Inesxistente)", async () => {
    const response = await supertest(app).post("/criarSessao").send({
      id_filme: id_inesxistente,
      horario: "20:30",
      e3d: false,
      idioma: "legendado",
      sala: "3",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Filme Inexistente!");
  });

  test("Adicionar Sessão (Filme Indisponível/Fora de cartaz)", async () => {
    const response = await supertest(app).post("/criarSessao").send({
      id_filme: id_indisponivel,
      horario: "20:30",
      e3d: false,
      idioma: "legendado",
      sala: "3",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Filme Indisponível/Fora de cartaz!");
  });

  test("Adicionar Sessão", async () => {
    const response = await supertest(app).post("/criarSessao").send({
      id_filme: "1",
      horario: "20:30",
      e3d: false,
      idioma: "legendado",
      sala: "3",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Sessão Criada com Sucesso!");
  });
});

server.close();
