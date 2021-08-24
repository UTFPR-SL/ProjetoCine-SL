console.log = function () {};

const supertest = require("supertest");
const app = require("../server/config");
const respPadrao = require("./config");
const banco = require("../server/banco");

var server = app.listen(51);

var id_teste = 0;
var id_inexistente = 0;

beforeAll(async () => {
  await banco.query(
    "insert into filmes (nome, cartazURL, duracao, genero, classificacaoIndicativa, sinopse) values ('Testerson', 'sem cartaz', '0h 10min', 'teste/Aventura', 'Livre', 'Adicionando filme para teste')"
  );
  await banco.query(
    "select * from filmes where nome='Testerson'",
    async function (err, result) {
      id_teste = result[0].id;
    }
  );
  await banco.query(
    "select * from filmes order by id desc limit 1",
    async function (err, result) {
      id_inexistente = result[0].id + 10;
    }
  );
});

afterAll(async () => {
  await banco.query("delete from Filmes where nome='Testerson' OR nome='Testerson 2'");
});

describe("GET Filmes em Cartaz /filmesEmCartaz", () => {
  test("Listar os filmes em cartaz", async () => {
    const response = await supertest(app).get("/filmesEmCartaz");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(`[{"id":`);
    expect(JSON.stringify(response.body)).toContain(`,"nome":"`);
    expect(JSON.stringify(response.body)).toContain(`}]`);
  });

  test("Listar os filmes em cartaz (Primeiro filme)", async () => {
    const response = await supertest(app).get("/filmesEmCartaz");
    const result = await banco.query(
      "select * from filmes where cartaz=1 order by id asc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[0].id).toBe(result[0].id);
      }
    );
  });

  test("Listar os filmes em cartaz (Ultimo filme)", async () => {
    const response = await supertest(app).get("/filmesEmCartaz");
    const result = await banco.query(
      "select * from filmes where cartaz=1 order by id desc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[response.body.length - 1].id).toBe(result[0].id);
      }
    );
  });
});

describe("GET Filmes Cadastrados /listarFilmes", () => {
  test("Listar os filmes em cartaz", async () => {
    const response = await supertest(app).get("/listarFilmes");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(`[{"id":`);
    expect(JSON.stringify(response.body)).toContain(`,"nome":"`);
    expect(JSON.stringify(response.body)).toContain(`}]`);
  });

  test("Listar os filmes em cartaz (Primeiro filme)", async () => {
    const response = await supertest(app).get("/listarFilmes");
    const result = await banco.query(
      "select * from filmes order by id asc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[0].id).toBe(result[0].id);
      }
    );
  });

  test("Listar os filmes em cartaz (Ultimo filme)", async () => {
    const response = await supertest(app).get("/listarFilmes");
    const result = await banco.query(
      "select * from filmes order by id desc limit 1",
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body[response.body.length - 1].id).toBe(result[0].id);
      }
    );
  });
});

describe("Post`s Adicionar Filmes /addFilme", () => {
  test("Adicionar Filme (Filme ja cadastrado)", async () => {
    const response = await supertest(app).post("/addFilme").send({
      nome: "Testerson",
      cartazURL: "sem cartaz",
      duracao: "0h 14min",
      genero: "Teste/Aventura",
      classificacaoIndicativa: "12",
      sinopse: "Teste de adicionar um filme já cadastrado.",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Filme já cadastrado no sistema!");
  });
  test("Adicionar Filme", async () => {
    const response = await supertest(app).post("/addFilme").send({
      nome: "Testerson 2",
      cartazURL: "sem cartaz",
      duracao: "0h 15min",
      genero: "Teste/Aventura",
      classificacaoIndicativa: "Livre",
      sinopse: "Teste de adicionar um filme.",
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Filme adicionado com sucesso!");
  });
});

describe("PUT Atualizar Status (Em Cartaz) do Filmes /attStatusFilme/:id", () => {
  test("Atualizando Filme (Filme Inexistente)", async () => {
    const response = await supertest(app).put("/attStatusFilme/"+id_inexistente);

    expect(response.body.cod).toBe(0);
    expect(response.body.msg).toBe("Filme Inexistente!");
  });
  test("Atualizando Filme para indisponivel", async () => {
    const response = await supertest(app).put("/attStatusFilme/"+id_teste);

    expect(response.body.cod).toBe(1);
    expect(response.body.msg).toBe("Filme Atualizado!");
    expect(response.body.status).toBe(false);
  });
  test("Atualizando Filme para disponivel", async () => {
    const response = await supertest(app).put("/attStatusFilme/"+id_teste);

    expect(response.body.cod).toBe(1);
    expect(response.body.msg).toBe("Filme Atualizado!");
    expect(response.body.status).toBe(true);
  });
});

server.close();
