CREATE DATABASE transaction_demo;

USE transaction_demo;

CREATE TABLE accounts (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    balance DECIMAL(10,2) NOT NULL
);

INSERT INTO accounts (name, balance)
VALUES
('Raghav', 1000),
('John', 500);

SELECT * FROM accounts;


START TRANSACTION;

UPDATE accounts
SET balance = balance - 200
WHERE id = 1;

UPDATE accounts
SET balance = balance + 200
WHERE id = 2;

COMMIT;
ROLLBACK;


UPDATE accounts
SET balance = 1000
WHERE id = 1;

UPDATE accounts
SET balance = 500
WHERE id = 2;



