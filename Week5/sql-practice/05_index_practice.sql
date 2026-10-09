CREATE DATABASE index_practice;

USE index_practice;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(255),
    age INT,
    city VARCHAR(100)
);

INSERT INTO users 
(name, email, age, city) 
VALUES
('Raghav', 'raghav@gmail.com', 25, 'Kathmandu'),
('Ram', 'ram@gmail.com', 30, 'Pokhara'),
('Hari', 'hari@gmail.com', 22, 'Kathmandu'),
('Sita', 'sita@gmail.com', 28, 'Lalitpur'),
('Gita', 'gita@gmail.com', 25, 'Bhaktapur'),
('John', 'john@gmail.com', 30, 'Kathmandu'),
('Sam', 'sam@gmail.com', 22, 'Pokhara'),
('Alex', 'alex@gmail.com', 25, 'Lalitpur');

SELECT * FROM users;

SHOW INDEX FROM users;

DESCRIBE users;

-- Checking whether a query uses an index

EXPLAIN
SELECT *
FROM users
WHERE id = 5;

EXPLAIN
SELECT *
FROM users
WHERE email = 'raghav@gmail.com';

-- A unique index (also enforces uniqueness, like the UNIQUE constraint)

CREATE UNIQUE INDEX idx_users_email
ON users(email);

DROP INDEX idx_users_email
ON users;


-- A composite (multi-column) index 
-- column order matters, most selective/most-queried column first

CREATE INDEX idx_users_name_age
ON users(name, age);

EXPLAIN
SELECT *
FROM users
WHERE name = 'Raghav';

EXPLAIN
SELECT *
FROM users
WHERE name = 'Raghav'
AND age = 25;

EXPLAIN
SELECT *
FROM users
WHERE age = 25;

SHOW INDEX FROM users;

-- index with order by

EXPLAIN
SELECT *
FROM users
WHERE city = 'Kathmandu'
ORDER BY age;

CREATE INDEX idx_users_city_age
ON users(city, age);

EXPLAIN
SELECT *
FROM users
WHERE city = 'Kathmandu'
ORDER BY age;

DESCRIBE users;





