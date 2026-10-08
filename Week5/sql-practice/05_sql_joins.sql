CREATE DATABASE sql_join;
USE  sql_join;

CREATE TABLE users (
	id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);	

INSERT INTO users 
(id, name, email)
VALUES
(1, 'Yabesh', "yabesh@gmail.com"),
(2, 'Prabhat', "prabhat@gmail.com"),
(3, 'Anup', "anup@gmail.com"),
(4, 'Bipin', "bipin@gmail.com");

SELECT * FROM users;

CREATE TABLE orders (
	id INT PRIMARY KEY,
    user_id INT,
    product VARCHAR(100),
    amount DECIMAL(10,2),
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

SET FOREIGN_KEY_CHECKS = 0;

INSERT INTO orders
(id, user_id, product, amount)
VALUES
(101, 1, 'Laptop', 80000),
(102, 1, 'Mouse', 1000),
(103, 2, 'Keyboard', 2500),
(104, 5, 'Monitor', 15000);

SET FOREIGN_KEY_CHECKS = 1;

SELECT * FROM orders;

-- inner join
SELECT users.id, users.name, orders.product, orders.amount
FROM users INNER JOIN orders
ON users.id = orders.user_id; 

-- left join
SELECT users.id, users.name, orders.product, orders.amount
FROM users LEFT JOIN orders
ON users.id = orders.user_id; 

-- find users who haven't placed any orders
SELECT users.name
FROM users LEFT JOIN orders
ON users.id = orders.user_id
WHERE orders.id IS NULL; 

-- right join
SELECT users.id, users.name, orders.product, orders.amount, orders.id
FROM users RIGHT JOIN orders
ON users.id = orders.user_id; 

-- full outer join

SELECT users.id, users.name, orders.product, orders.amount, orders.id
FROM users LEFT JOIN orders
ON users.id = orders.user_id
UNION
SELECT users.id, users.name, orders.product, orders.amount, orders.id
FROM users RIGHT JOIN orders
ON users.id = orders.user_id; 


-- join with WHERE
SELECT users.name, orders.product, orders.amount
FROM users JOIN orders
ON users.id = orders.user_id
WHERE orders.amount > 5000; 


-- join with aliases
SELECT u.name, o.product
FROM users AS u 
INNER JOIN orders AS o
ON u.id = o.user_id;






















