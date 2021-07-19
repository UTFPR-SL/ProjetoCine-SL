-- CREATE DATABASE IF NOT EXISTS Cinema;

USE Cinema;

DROP TABLE IF EXISTS SessaoTemLugares;
DROP TABLE IF EXISTS Sessoes;
DROP TABLE IF EXISTS Lugares;
DROP TABLE IF EXISTS Filmes;


CREATE TABLE IF NOT EXISTS Filmes(
id int auto_increment NOT NULL,
nome varchar(80),
duracao varchar(80),
genero varchar(80),
classificacaoIndicativa char,
sinopse varchar(256),
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Sessoes(
id int auto_increment NOT NULL PRIMARY KEY,
id_filme int,
horario time,
data date,
3d bool,
idioma varchar(32),
sala varchar(16),
qtd_lugares int,
id_sessaoLugar int,
CONSTRAINT id_filme FOREIGN KEY (id_filme) REFERENCES Filmes(id)
);

CREATE TABLE IF NOT EXISTS Lugares(
cod char PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS SessaoTemLugares(
    id int auto_increment NOT NULL,
    id_sessao int,
    id_lugar varchar(8),
    PRIMARY KEY (id),
    CONSTRAINT id_sessao FOREIGN KEY (id_sessao) REFERENCES Sessoes(id),
    CONSTRAINT id_lugar FOREIGN KEY (id_lugar) REFERENCES Lugares(cod)
);