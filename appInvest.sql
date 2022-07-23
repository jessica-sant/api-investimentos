DROP DATABASE IF EXISTS AppInvest;

CREATE DATABASE AppInvest;

CREATE TABLE AppInvest.assets(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR(100) NOT NULL,
    value DECIMAL NOT NULL,
    stock INT NOT NULL
) engine = InnoDB; 

CREATE TABLE AppInvest.users(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(150) NOT NULL
) engine = InnoDB;  

CREATE TABLE AppInvest.wallet(
    id INT  PRIMARY KEY AUTO_INCREMENT,
    userId INT ,
    account  VARCHAR(50),
    balance DECIMAL,
    FOREIGN KEY (userId) REFERENCES AppInvest.users(id)
) engine = InnoDB; 


CREATE TABLE AppInvest.investments(
    userId INT,
    assetId  INT,
    quantity INT,
    CONSTRAINT PRIMARY KEY(userId, assetId),
    FOREIGN KEY (assetId ) REFERENCES AppInvest.assets(id),
    FOREIGN KEY (userId) REFERENCES AppInvest.users(id)

) engine = InnoDB; 


INSERT INTO AppInvest.assets (name, value, stock)
VALUES
  ('asset1', 50.00, 200),
  ('asset2', 40.00, 200),
  ('asset3', 60.00, 200),
  ('asset4', 60.00, 200),
  ('asset5', 80.00, 200),
  ('asset6', 90.00, 200),
  ('asset7', 120.00, 200),
  ('asset8', 50.00, 200),
  ('asset9', 50.00, 200),
  ('asset10', 10.00, 200);
  
INSERT INTO AppInvest.users (name, email , password)
VALUES
  
  ('user1', 'aaaaa@aaa.aaa','password'),
  ('user2', 'aaaaa@aaa.aaa','password'),
  ('user3', 'aaaaa@aaa.aaa','password'),
  ('user4', 'aaaaa@aaa.aaa','password'),
  ('user5', 'aaaaa@aaa.aaa','password'),
  ('user6', 'aaaaa@aaa.aaa','password'),
  ('user7', 'aaaaa@aaa.aaa','password'),
  ('user8', 'aaaaa@aaa.aaa','password'),
  ('user9', 'aaaaa@aaa.aaa','password'),
  ('user10', 'aaaaa@aaa.aaa','password');
  
INSERT INTO AppInvest.wallet (userId, account, balance)
VALUES
  (1, '5555', 1000.00),
  (2, '5555', 1000.00),
  (3, '5555', 1000.00),
  (4, '5555', 1000.00),
  (5, '5555', 1000.00),
  (6, '5555', 1000.00),
  (7, '5555', 1000.00),
  (8, '5555', 1000.00),
  (9, '5555', 1000.00),
  (10, '5555', 1000.00);
  


INSERT INTO AppInvest.investments ( userId, assetId, quantity )
VALUES
  (1, 2, 30),
  (2, 1, 3),
  (3, 2, 6),
  (4, 6, 7),
  (5, 4, 15),
  (6, 2, 15),
  (7, 5, 10),
  (8, 1, 10),
  (9, 3, 15),
  (10, 4, 6);