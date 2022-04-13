console.log = function () {};

const supertest = require("supertest");
const respPadrao = require("./config");
const app = require("../server/config");
const banco = require("../server/banco");

var server = app.listen(50);

var id_teste;

afterAll(async () => {
  await banco.query("delete from Login where usuario='teste'");
});

describe("POST Login /login", () => {
  test("Realizar Login (usuario errado)", async () => {
    const response = await supertest(app)
      .post("/login")
      .send({ usuario: "adminn", senha: "admin" });

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].cod).toBe(1);
    expect(response.body[0].mensagem).toBe("Usuário errado");
  });

  test("Realizar Login (Senha Errada)", async () => {
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
});

describe("POST Adicionar usuário /addUsuario", () => {
  test("Adicionar Usuário (usuário indisponivel)", async () => {
    const response = await supertest(app).post("/addUsuario").send({
      nome: "Administrador",
      usuario: "admin",
      senha: "admin",
      adm: true,
    });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Usuário Indisponível");
  });

  test("Adicionar Usuário", async () => {
    const response = await supertest(app)
      .post("/addUsuario")
      .send({ nome: "Testerson", usuario: "teste", senha: "123", adm: false });

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe("Usuário adicionado com sucesso!");

    await banco.query(
      "select * from Login where usuario='teste'",
      async function (err, result) {
        id_teste = result[0].id;
      }
    );
  });
});

describe("GET Listar usuários", () => {
  test("Listar usuários (Administrador) /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].nome).toBe("Administrador");
    expect(response.body[0].usuario).toBe("admin");
  });

  test("Listar usuários (Caio) /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");
    expect(response.body[1].nome).toBe("Caio");
    expect(response.body[1].usuario).toBe("dansujaum");
  });

  test("Listar usuários (Gustavo) /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");
    expect(response.body[2].nome).toBe("gustavo");
    expect(response.body[2].usuario).toBe("kiboki");
  });

  test("Listar usuários (Vinícius) /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");
    expect(response.body[3].nome).toBe("Vinicius");
    expect(response.body[3].usuario).toBe("vnks");
  });

  test("Listar usuários (Juca) /usuarios", async () => {
    const response = await supertest(app).get("/usuarios");
    expect(response.body[4].nome).toBe("Juca");
    expect(response.body[4].usuario).toBe("juquinha");
  });
});

describe("PUT Atualizar permissão (Administrador) do Usuário /attADMUsuario/:id", () => {
  test("Atualizar Usuário (Usuário Inexistente ) ", async () => {
    const response = await supertest(app).put("/attADMUsuario/" + id_teste+10);
  
    expect(response.body.cod).toBe(0);
    expect(response.body.msg).toBe("Usuário Inexistente!");
  });
  test("Atualizar Usuário para Administrador ", async () => {
    const response = await supertest(app).put("/attADMUsuario/" + id_teste);
  
    expect(response.body.cod).toBe(1);
    expect(response.body.msg).toBe("Usuário Atualizado!");
    expect(response.body.status).toBe(true);
  });
  test("Atualizar Usuário para não Administrador ", async () => {
    const response = await supertest(app).put("/attADMUsuario/" + id_teste);
  
    expect(response.body.cod).toBe(1);
    expect(response.body.msg).toBe("Usuário Atualizado!");
    expect(response.body.status).toBe(false);
  });
});

server.close();
