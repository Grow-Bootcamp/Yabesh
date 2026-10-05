CREATE DATABASE ecommerce;
USE ecommerce;

-- SELECT VERSION(); 

SELECT database();

SHOW DATABASES;

SHOW TABLES;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    age INT
);

ALTER TABLE users
ADD CONSTRAINT chk_age CHECK (age>=18 AND age<=120);

SELECT * FROM users;

INSERT INTO users (name, email, age) 
VALUES ('Abhinav', 'abhinav5@example.com', 120);

INSERT INTO users 
(name, email, age) 
VALUES 
('Prabhat', 'prabhat1@example.com', 21),
('Anup', 'anup@example.com', 23),
('Bipin', 'bipin@example.com', 22),
('Sagar', 'sagar@example.com', 22);

SELECT * FROM users 
WHERE age<18 OR age>120;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM users 
WHERE age<18 OR age>120;

SET SQL_SAFE_UPDATES = 1;










