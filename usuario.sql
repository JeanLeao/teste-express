-- SHOW DATABASES;
--CREATE DATABASE sistemaDeCadastro;
-- SHOW TABLES;
--USE SISTEMADECADASTRO
CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);
-- DESCRIBE TABLE NAME

INSERT INTO usuarios(nome, email, idade) VALUES(
 "Jean Leão", "jeanc.leaosantos@gmail.com", 20
);

--SELECT * FROM usuarios;

INSERT INTO usuarios(nome, email, idade) VALUES(
 "Jhonny", "aaaaaa@mail.com", 60
);
INSERT INTO usuarios(nome, email, idade) VALUES(
 "Leão", "VAISIFUDE@gmail.com", 50
);

--SELECT * FROM usuarios WHERE idade = 8;  // WHERE - CONDIÇÃO

--DELETE FROM usuarios // DELETA TUDO
--DELETE FROM usuarios WHERE nome = "Leão"; // CONDIÇÃO NÃO DEIXA DELETAR TUDO TUDO

--UPDATE usuarios SET nome = "Hanzo" WHERE nome = "Jhonny" // CONDUÇÃO UNICA
--UPDATE usuarios SET nome = "Hanzo", email = "AAAAAA@OUTLOOK.COM " WHERE nome = "Jhonny" // CONDIÇÃO DE UPDATE 
--UPDATE usuarios SET nome = "Hanzo" // SETA TODOS OS NOMES PARA ISSO