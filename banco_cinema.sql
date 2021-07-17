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
filme char,
horario time,
data date,
3d bool,
idioma char,
sala char,
lugares int
);

CREATE TABLE Lugares(
cod char PRIMARY KEY,
disponivel bool
);