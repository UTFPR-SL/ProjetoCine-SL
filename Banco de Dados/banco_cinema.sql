CREATE DATABASE Cinema;

CREATE TABLE Filmes(
id int auto_increment NOT NULL PRIMARY KEY,
nome char,
duracao char,
genero char,
classificacaoIndicativa char,
sinopse text
);

CREATE TABLE Sessoes(
id int auto_increment NOT NULL PRIMARY KEY,
id_filme int,
horario time,
data date,
3d bool,
idioma char,
sala char,
qtd_lugares int,
id_sessaoLugar int,
FOREIGN KEY (id_filmes) REFERENCES Filmes(id)
FOREIGN KEY (id_sessaoLugar) REFERENCES SessoesTemLugares(id)
);

CREATE TABLE SessoesTemLugares(
    id int auto_increment NOT NULL PRIMARY KEY;
    id_sessao int,
    id_lugar char,
    FOREIGN KEY (id_sessao) REFERENCES Sessoes(id),
    FOREIGN KEY (id_lugar) REFERENCES Lugares(cod)
);

CREATE TABLE Lugares(
cod char PRIMARY KEY,
disponivel bool,
id_sessaoLugar int,
FOREIGN KEY (id_sessaoLugar) REFERENCES SessoesTemLugares(id)
);