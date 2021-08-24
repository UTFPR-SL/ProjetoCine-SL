DROP DATABASE IF EXISTS Cinema;
CREATE DATABASE IF NOT EXISTS Cinema;

USE Cinema;

-- DROP TABLE IF EXISTS Ingresso;
-- DROP TABLE IF EXISTS Sessoes;
-- DROP TABLE IF EXISTS Assentos;
-- DROP TABLE IF EXISTS Filmes;
-- DROP TABLE IF EXISTS Compras;
-- DROP TABLE IF EXISTS Login;


CREATE TABLE IF NOT EXISTS Login(
id int auto_increment NOT NULL,
nome varchar(80) NOT NULL,
usuario varchar(80) NOT NULL UNIQUE,
senha varchar(80) NOT NULL,
adm bool default false,
PRIMARY KEY(id)
);

CREATE TABLE IF NOT EXISTS Compras(
id int auto_increment NOT NULL,
id_vendedor int NOT NULL,
cliente varchar(80) NOT NULL,
cfp varchar(80),
valor int NOT NULL,
PRIMARY KEY(id),
CONSTRAINT id_vendedor FOREIGN KEY (id_vendedor) REFERENCES login(id)
);

CREATE TABLE IF NOT EXISTS Filmes(
id int auto_increment NOT NULL,
nome varchar(80) NOT NULL,
duracao varchar(80),
genero varchar(80),
classificacaoIndicativa char(8),
sinopse varchar(1024),
cartazURL varchar(256),
cartaz bool default true,
PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Sessoes(
id int auto_increment NOT NULL,
id_filme int,
status bool default true,
horario time,
e3d bool,
idioma varchar(32),
sala varchar(16),
qtd_lugares int default 30,
PRIMARY KEY(id),
CONSTRAINT id_filme FOREIGN KEY (id_filme) REFERENCES Filmes(id)
);

CREATE TABLE IF NOT EXISTS Assentos(
cod char(3) PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS Ingresso(
    id int auto_increment NOT NULL,
    id_sessao int,
    id_assento varchar(8),
    id_compra int,
    PRIMARY KEY (id),
    CONSTRAINT id_sessao FOREIGN KEY (id_sessao) REFERENCES Sessoes(id),
    CONSTRAINT id_assento FOREIGN KEY (id_assento) REFERENCES Assentos(cod),
	CONSTRAINT id_compra FOREIGN KEY (id_compra) REFERENCES Compras(id)
);