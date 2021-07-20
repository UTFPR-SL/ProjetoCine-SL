-- CREATE DATABASE IF NOT EXISTS Cinema;

USE Cinema;

INSERT INTO login (nome, usuario, senha, adm)
VALUES ("João", "admin", "admin", true),
		("Juquinha", "juca", "asd123", false);


INSERT INTO Filmes (nome, duracao, genero, classificacaoIndicativa, sinopse)
VALUES ("Viúva Negra", "2h 14min", "Ação/Ficção Científica", "12", "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz."),
		("Vingadores: Guerra Infinita", "2h 40min", "Ação/Ficção Científica", "12", "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."),
		("Velozes e Furiosos 9", "2h 25min", "Ação/Aventura", "12", "O longa vem dando continuidade às corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.");
		

INSERT INTO Sessoes (id_filme, horario, 3d, idioma, sala, qtd_lugares)
VALUES (1, "20:30", false, "Dublao", 1, 30),
		(2, "20:00", true, "Dublao", 2, 30),
		(2, "22:00", false, "Dublao", 3, 30);



INSERT INTO Lugares (cod)
VALUES ("A01"), ("A02"), ("A03"), ("A04"), ("A05"), ("A06"),
        ("B01"), ("B02"), ("B03"), ("B04"), ("B05"), ("B06"),
        ("C01"), ("C02"), ("C03"), ("C04"), ("C05"), ("C06"),
        ("D01"), ("D02"), ("D03"), ("D04"), ("D05"), ("D06"),
        ("E01"), ("E02"), ("E03"), ("E04"), ("E05"), ("E06");

