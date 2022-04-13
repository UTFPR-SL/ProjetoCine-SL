console.log = function () {};

const supertest = require("supertest");
const respPadrao = require("./config");
const app = require("../server/config");
const banco = require("../server/banco");

var server = app.listen(53);


describe("GET Listar os Assentos Ocupados /ingressosIndisponiveis", () => {
  test("Listar os Assentos Ocupados", async () => {
    const response = await supertest(app).get(
      "/ingressosIndisponiveis/1/2021-09-03"
      );
      
      expect(respPadrao(response)).toBe(true);
      expect(JSON.stringify(response.body)).toContain(`[{`);
      expect(JSON.stringify(response.body)).toContain(`}]`);
    });
  });
  
  describe("POST Inserir compra e Assentos comprados /compraDosIngressos", () => {
    test("Listar os Assentos Ocupados", async () => {
      const response = await supertest(app)
      .post("/compraDosIngressos")
      .send([
        {
          id_vendedor: 3,
          cliente: "Shinohara",
          cpf: "15975345600",
          id_sessao: 1,
          data: "2017-09-03",
          qtd_ingressos: 2,
          valor: 40,
          ingressos: [
            {
              cod_assento: "A01",
              meia: 0,
            },
            {
              cod_assento: "A02",
              meia: 0,
            },
          ],
        },
      ]);
      const id_sessao = 1;
      const data = "2017-09-03";
      const result = await banco.query(
        `SELECT * FROM Ingressos WHERE id_sessao=${id_sessao} and data='${data}' order by id desc limit 1`,
      async function (err, result) {
        expect(respPadrao(response)).toBe(true);
        expect(response.body).toBe(result[0].id_compra);
      }
    );
  });
});

describe("GET Listar/Mostrar o Recibo/Ingressos da Compra /ingressosVendidos", () => {
  test("Listar/Mostrar o Recibo/Ingressos da Compra (Compra Inexistente)", async () => {
    const response = await supertest(app).get("/ingressosVendidos/-1");

    expect(respPadrao(response)).toBe(true);
    expect(response.text).toBe(`Compra Inexistente!`);
  });

  test("Listar/Mostrar o Recibo/Ingressos da Compra (Generico)", async () => {
    const response = await supertest(app).get("/ingressosVendidos/1");

    expect(respPadrao(response)).toBe(true);
    expect(JSON.stringify(response.body)).toContain(`[{"id":`);
    expect(JSON.stringify(response.body)).toContain(`,"id_vendedor":`);
    expect(JSON.stringify(response.body)).toContain(`,"cliente":`);
    expect(JSON.stringify(response.body)).toContain(`,"cpf":`);
    expect(JSON.stringify(response.body)).toContain(`,"qtd_ingressos":`);
    expect(JSON.stringify(response.body)).toContain(`,"valor":`);
    expect(JSON.stringify(response.body)).toContain(`,"ingressos":[{"id":`);
    expect(JSON.stringify(response.body)).toContain(`,"id_sessao":`);
    expect(JSON.stringify(response.body)).toContain(`,"cod_assento":`);
    expect(JSON.stringify(response.body)).toContain(`,"id_compra":`);
    expect(JSON.stringify(response.body)).toContain(`,"meia":`);
    expect(JSON.stringify(response.body)).toContain(`,"data":`);
    expect(JSON.stringify(response.body)).toContain(`}]}]`);
  });

  test("Listar/Mostrar o Recibo/Ingressos da Compra (Primeira Compra)", async () => {
    const response = await supertest(app).get("/ingressosVendidos/1");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].id).toBe(1);
    expect(response.body[0].id_vendedor).toBe(4);
    expect(response.body[0].cliente).toBe("Osvaldo");
    expect(response.body[0].cpf).toBe("12345678900");
    expect(response.body[0].qtd_ingressos).toBe(5);
    expect(response.body[0].valor).toBe(80);

    expect(response.body[0].ingressos[0].id).toBe(1);
    expect(response.body[0].ingressos[0].id_sessao).toBe(1);
    expect(response.body[0].ingressos[0].cod_assento).toBe("A01");
    expect(response.body[0].ingressos[0].id_compra).toBe(1);
    expect(response.body[0].ingressos[0].meia).toBe(0);
    expect(response.body[0].ingressos[0].data).toContain("2021-09-03");

    expect(response.body[0].ingressos[4].id).toBe(5);
    expect(response.body[0].ingressos[4].id_sessao).toBe(1);
    expect(response.body[0].ingressos[4].cod_assento).toBe("A05");
    expect(response.body[0].ingressos[4].id_compra).toBe(1);
    expect(response.body[0].ingressos[4].meia).toBe(1);
    expect(response.body[0].ingressos[4].data).toContain("2021-09-03");
  });

  test("Listar/Mostrar o Recibo/Ingressos da Compra (Segunda Compra)", async () => {
    const response = await supertest(app).get("/ingressosVendidos/2");

    expect(respPadrao(response)).toBe(true);
    expect(response.body[0].id).toBe(2);
    expect(response.body[0].id_vendedor).toBe(4);
    expect(response.body[0].cliente).toBe("Luiz");
    expect(response.body[0].cpf).toBe("00987654321");
    expect(response.body[0].qtd_ingressos).toBe(2);
    expect(response.body[0].valor).toBe(40);

    expect(response.body[0].ingressos[0].id).toBe(6);
    expect(response.body[0].ingressos[0].id_sessao).toBe(2);
    expect(response.body[0].ingressos[0].cod_assento).toBe("A01");
    expect(response.body[0].ingressos[0].id_compra).toBe(2);
    expect(response.body[0].ingressos[0].meia).toBe(0);
    expect(response.body[0].ingressos[0].data).toContain("2021-09-03");

    expect(response.body[0].ingressos[1].id).toBe(7);
    expect(response.body[0].ingressos[1].id_sessao).toBe(2);
    expect(response.body[0].ingressos[1].cod_assento).toBe("A02");
    expect(response.body[0].ingressos[1].id_compra).toBe(2);
    expect(response.body[0].ingressos[1].meia).toBe(0);
    expect(response.body[0].ingressos[1].data).toContain("2021-09-03");
  });
});

server.close();
