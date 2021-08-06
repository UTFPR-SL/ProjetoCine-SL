console.log = function() {}

const supertest = require("supertest");
const app = require("../server/index");
const server = require("../server/index");

server.close();
app.listen(71);

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
  
  describe("GET`s Login", () => {
    test("Realizar Login (usuario errado) /login", async () => {
      const response = await supertest(app).get("/login").send({usuario: "adminn", senha: "admin"});
  
      expect(respPadrao(response)).toBe(true);
      expect(response.body[0].cod).toBe(1);
      expect(response.body[0].mensagem).toBe("Usuário errado");
    });
    
    test("Realizar Login (Senha Errada) /login", async () => {
      const response = await supertest(app).get("/login").send({usuario: "admin", senha: "adminn"});
      
      expect(respPadrao(response)).toBe(true);
      expect(response.body[0].cod).toBe(2);
      expect(response.body[0].mensagem).toBe("Senha errada");
    });

    test("Realizar Login /login", async () => {
      const response = await supertest(app).get("/login").send({usuario: "admin", senha: "admin"});
  
      expect(respPadrao(response)).toBe(true);
      expect(response.body[0].nome).toBe("João");
      expect(response.body[0].usuario).toBe("admin");
      expect(response.body[0].adm).toBe(1);
    });
  });
  