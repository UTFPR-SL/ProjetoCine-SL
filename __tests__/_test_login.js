console.log = function () {};

const supertest = require("supertest");
const app = require("../server/config");
const respPadrao = require("./config");
const banco = require("../server/banco");

var server = app.listen(50);

afterAll(async () => {
  await banco.query("delete from Login order by id desc limit 1");
});

describe("POST`s Login", () => {
  test("Realizar Login (usuario errado) /login", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ usuario: "adminn", senha: "admin" });

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].cod).toBe(1);
    expect(response.body[0].mensagem).toBe("Usuário errado");
  });

  test("Realizar Login (Senha Errada) /login", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ usuario: "admin", senha: "adminn" });

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].cod).toBe(2);
    expect(response.body[0].mensagem).toBe("Senha errada");
  });

  test("Realizar Login /login", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ usuario: "admin", senha: "admin" });

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].nome).toBe("Administrador");
    expect(response.body[0].usuario).toBe("admin");
    expect(response.body[0].adm).toBe(1);
  });

  test("Adicionar Usuário (usuário indisponivel) /addUsuario", async () => {
    const response = await supertest(app)
      .post("/addUsuario")
      .send({
        nome: "Administrador",
        usuario: "admin",
        senha: "admin",
        adm: true,
      });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Usuário Indisponível");
  });

  test("Adicionar Usuário /addUsuario", async () => {
    const response = await supertest(app)
      .post("/addUsuario")
      .send({ nome: "Testerson", usuario: "teste", senha: "123", adm: false });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Usuário adicionado com sucesso!");
  });
});

describe("GET`s Login", () => {
  test("Listar usuários /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].nome).toBe("Administrador");
    expect(response.body[0].usuario).toBe("admin");
    expect(response.body[0].adm).toBe(1);

    expect(response.body[1].nome).toBe("Caio");
    expect(response.body[1].usuario).toBe("dansujaum");
    expect(response.body[1].adm).toBe(1);

    expect(response.body[2].nome).toBe("gustavo");
    expect(response.body[2].usuario).toBe("kiboki");
    expect(response.body[2].adm).toBe(1);

    expect(response.body[3].nome).toBe("Vinicius");
    expect(response.body[3].usuario).toBe("vnks");
    expect(response.body[3].adm).toBe(1);

    expect(response.body[4].nome).toBe("Juca");
    expect(response.body[4].usuario).toBe("juquinha");
    expect(response.body[4].adm).toBe(0);
  });
});

server.close();
