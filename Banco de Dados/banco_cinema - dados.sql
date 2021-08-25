
USE Cinema;

INSERT INTO login (nome, usuario, senha, adm)
VALUES ("Administrador", "admin", "admin", true),
		("Caio", "dansujaum", "dansujaum", true),
		("gustavo", "kiboki", "kiboki", true),
		("Vinicius", "vnks", "vnks", true),
		("Juca", "juquinha", "asd123", false);


INSERT INTO Filmes (nome, cartazURL, duracao, genero, classificacaoIndicativa, sinopse)
VALUES ("Viúva Negra", "https://br.web.img3.acsta.net/c_310_420/pictures/20/03/09/15/51/4538015.jpg", "2h 14min", "Ação/Ficção Científica", "12", "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz."),
		("Vingadores: Guerra Infinita", "https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg", "2h 40min", "Ação/Ficção Científica", "12", "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."),
		("Velozes e Furiosos 9", "https://br.web.img3.acsta.net/pictures/21/04/14/19/06/3385237.jpg", "2h 25min", "Ação/Aventura", "12", "O longa vem dando continuidade às corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.");
		

INSERT INTO Sessoes (status, id_filme, horario, e3d, idioma, sala, qtd_lugares)
VALUES (true, 1, "20:30", false, "Dublado", 1, 30),
		(true, 2, "20:00", true, "Dublado", 2, 30),
		(false, 2, "22:00", false, "Dublado", 3, 30);


INSERT INTO Assentos (cod)
VALUES ("A01"), ("A02"), ("A03"), ("A04"), ("A05"), ("A06"),
        ("B01"), ("B02"), ("B03"), ("B04"), ("B05"), ("B06"),
        ("C01"), ("C02"), ("C03"), ("C04"), ("C05"), ("C06"),
        ("D01"), ("D02"), ("D03"), ("D04"), ("D05"), ("D06"),
        ("E01"), ("E02"), ("E03"), ("E04"), ("E05"), ("E06");


INSERT INTO Compra (id_vendedor, cliente, cfp, qtd_ingressos, valor)
VALUES (4, "Osvaldo", "12345678900", 5, 80),
		(4, "Luiz", "00987654321", 2, 40);


INSERT INTO Ingressos (id_sessao, cod_assento, id_compra, data, meia)
VALUES (1, "A01", 1, "2021-09-03", false),
		(1, "A02", 1, "2021-09-03", false),
		(1, "A03", 1, "2021-09-03", false),
		(1, "A04", 1, "2021-09-03", true),
		(1, "A05", 1, "2021-09-03", true),
		(2, "A01", 2, "2021-09-03", false),
		(2, "A02", 2, "2021-09-03", false);

