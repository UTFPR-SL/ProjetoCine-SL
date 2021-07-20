-- CREATE DATABASE IF NOT EXISTS Cinema;

USE Cinema;

INSERT INTO login (nome, usuario, senha, adm)
VALUES ("João", "admin", "admin", true),
		("Juquinha", "juca", "asd123", false);


INSERT INTO Filmes (nome, duracao, genero, classificacaoIndicativa, sinopse)
VALUES ("Viúva Negra", "2h 14min", "Ação/Ficção Científica", "12", "Ao nascer, a Viúva Negra, então conhecida como Natasha Romanova, é entregue à KGB, que a prepara para se tornar sua agente suprema. Porém, o seu próprio governo tenta matá-la quando a União Soviética se desfaz."),
		("Vingadores: Guerra Infinita", "2h 40min", "Ação/Ficção Científica", "12", "Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos. Em uma missão para coletar todas as seis pedras infinitas, Thanos planeja usá-las para infligir sua vontade maléfica sobre a realidade."),
		("Velozes e Furiosos 9", "2h 25min", "Ação/Aventura", "12", "O longa vem dando continuidade às corridas eletrizantes da equipe de amigos liderada por Dominic Toretto.");
		

INSERT INTO Sessoes (id_filme, horario, 3d, idioma, sala, qtd_lugares, id_seesaoLugar)
VALUES (1, "20:30", false, "Dublao", 1, 30),
		(2, "20:00", true, "Dublao", 2, 30),
		(2, "22:00", false, "Dublao", 3, 30);



INSERT INTO Lugares (cod)
VALUES ("A01"), ("A02"), ("A03"), ("A04"), ("A05"),
        ("A06"), ("A07"), ("A08"), ("A09"), ("A10"),
        ("A11"), ("A12"), ("A13"), ("A14"), ("A15"),
        ("A16"), ("A17"), ("A18"), ("A19"), ("A20"),
        ("A21"), ("A22"), ("A23"), ("A24"), ("A25"),
        ("A26"), ("A27"), ("A28"), ("A29"), ("A30"),
        ("B01"), ("B02"), ("B03"), ("B04"), ("B05"),
        ("B06"), ("B07"), ("B08"), ("B09"), ("B10"),
        ("B11"), ("B12"), ("B13"), ("B14"), ("B15"),
        ("B16"), ("B17"), ("B18"), ("B19"), ("B20"),
        ("B21"), ("B22"), ("B23"), ("B24"), ("B25"),
        ("B26"), ("B27"), ("B28"), ("B29"), ("B30"), 
        ("C01"), ("C02"), ("C03"), ("C04"), ("C05"),
        ("C06"), ("C07"), ("C08"), ("C09"), ("C10"),
        ("C11"), ("C12"), ("C13"), ("C14"), ("C15"),
        ("C16"), ("C17"), ("C18"), ("C19"), ("C20"),
        ("C21"), ("C22"), ("C23"), ("C24"), ("C25"),
        ("C26"), ("C27"), ("C28"), ("C29"), ("C30");

