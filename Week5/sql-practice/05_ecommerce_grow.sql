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
DESCRIBE users;
DESC order_items;		-- same as DESCRIBE users

SHOW TABLE STATUS;

INSERT INTO users (name, email, age) 
VALUES ('NULL', 'sagar2@example.com', 23);

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



CREATE TABLE products (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (name, price) 
VALUES 
('Laptop', 80000),
('Mouse', 604.36),
('Keyboard', 2570.67);

SELECT * FROM products;


CREATE TABLE orders (
	id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO orders
(user_id)
VALUES
(1);



CREATE TABLE order_items(
	id INT PRIMARY KEY AUTO_INCREMENT,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);

INSERT INTO order_items
(order_id, product_id, quantity)
VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 2);


SELECT 
	orders.id AS order_id,
	users.name AS user_name
FROM orders
JOIN users
	ON orders.user_id = users.id;
    

SELECT 
	orders.id AS order_id,
    users.name AS user_name,
    products.name AS product_name,
    order_items.quantity
FROM order_items
JOIN orders
	ON order_items.order_id = orders.id
JOIN users
	ON orders.user_id = users.id
JOIN products
	ON order_items.product_id = products.id;

















