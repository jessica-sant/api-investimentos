DROP DATABASE IF EXISTS AppInvest;

CREATE DATABASE AppInvest;

CREATE TABLE AppInvest.ativos(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    nome  VARCHAR(100) NOT NULL,
    valor DECIMAL(5,2) NOT NULL,
    estoque INT NOT NULL
) engine = InnoDB; 

CREATE TABLE AppInvest.usuarios(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    nome  VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
) engine = InnoDB;  

CREATE TABLE AppInvest.carteira(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    user_id INT ,
    conta  VARCHAR(50),
    saldo DECIMAL(5,2),
    FOREIGN KEY (user_id) REFERENCES AppInvest.usuarios(id)
) engine = InnoDB; 


CREATE TABLE AppInvest.investimentos(
    usuario_id INT,
    ativo_id  INT,
    quantidade INT,
    CONSTRAINT PRIMARY KEY(usuario_id, ativo_id),
    FOREIGN KEY (ativo_id ) REFERENCES AppInvest.ativos(id),
    FOREIGN KEY (usuario_id) REFERENCES AppInvest.usuarios(id)

) engine = InnoDB; 


INSERT INTO AppInvest.ativos (nome, valor, estoque)
VALUES
  ('xpto1', 350.00, 100 ),
  ('xpto2', 7.99, 100);

INSERT INTO AppInvest.usuarios (nome, email , senha)
VALUES
  ('Thati', 'jjj@jj.com', 'djvhdiihicfuihf' ),
  ('Cintia', 'mdmdkmck@cc.com','555555');

INSERT INTO AppInvest.carteira (user_id, conta, saldo)
VALUES
  (1, 'hhh', 200.00),
  (2, 'hhh', 500.00);


INSERT INTO AppInvest.investimentos ( usuario_id, ativo_id, quantidade )
VALUES
  (1, 2, 30),
  (2, 1, 15);


