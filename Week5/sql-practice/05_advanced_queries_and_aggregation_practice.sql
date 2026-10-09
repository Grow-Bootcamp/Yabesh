CREATE DATABASE advanced_queries;

USE advanced_queries;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    age INT NOT NULL,
    role VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);
INSERT INTO users (name, email, age, role, salary)
VALUES
('Prabhat', 'prabhat@example.com', 21, 'user', 35000);

INSERT INTO users (name, email, age, role, salary)
VALUES
('Raghav', 'raghav@example.com', 23, 'user', 30000),
('Sagar', 'sagar@example.com', 25, 'admin', 50000),
('Yabesh', 'yabesh@example.com', 22, 'user', 28000),
('Amit', 'amit@example.com', 30, 'admin', 60000),
('John', 'john@example.com', 27, 'moderator', 45000),
('Ram', 'ram@example.com', 20, 'user', 25000),
('Hari', 'hari@example.com', 35, 'admin', 70000),
('David', 'david@example.com', 29, 'moderator', 48000),
('Alex', 'alex@example.com', 24, 'user', 32000),
('Sam', 'sam@example.com', 31, 'moderator', 52000);

SELECT * FROM users;

DESCRIBE users;

SELECT *
FROM users
WHERE age > 25;

SELECT *
FROM users
WHERE role = 'admin';

SELECT *
FROM users
WHERE age >= 27
AND role = 'admin';

SELECT *
FROM users
WHERE role = 'admin'
OR role = 'moderator';

SELECT *
FROM users
WHERE age BETWEEN 20 AND 30;

SELECT *
FROM users
WHERE role IN ('admin', 'moderator');

SELECT *
FROM users
WHERE name LIKE 'A%';

SELECT *
FROM users
ORDER BY age ASC;

SELECT *
FROM users
ORDER BY salary DESC;

SELECT *
FROM users
WHERE age >= 25
ORDER BY salary DESC;

SELECT *
FROM users;

SELECT *
FROM users
LIMIT 5;

SELECT *
FROM users
LIMIT 5 OFFSET 3;

SELECT *
FROM users
ORDER BY id ASC
LIMIT 5 OFFSET 5;

SELECT *
FROM users
WHERE age >= 25
ORDER BY salary DESC
LIMIT 5 OFFSET 2;

SELECT *
FROM users
WHERE role = 'user'
AND age >= 20
ORDER BY age DESC
LIMIT 3 OFFSET 3;


-- aggregation
SELECT COUNT(*) AS total_users
FROM users;

SELECT role, COUNT(*) AS total_users
FROM users
GROUP BY role;

SELECT AVG(age) AS average_age
FROM users;

SELECT SUM(salary) AS total_salary
FROM users;

SELECT MIN(age) AS youngest_age
FROM users;

SELECT MAX(age) AS oldest_age
FROM users;

SELECT role
FROM users;

SELECT role
FROM users
GROUP BY role;

SELECT
    role,
    COUNT(*) AS total_users
FROM users
GROUP BY role;

SELECT
    role,
    COUNT(*) AS total_users,
    AVG(age) AS average_age,
    MAX(salary) AS highest_salary
FROM users
GROUP BY role;

SELECT
    role,
    COUNT(*) AS total_users,
    AVG(age) AS average_age,
    MAX(salary) AS highest_salary
FROM users
WHERE age >= 20
GROUP BY role
HAVING COUNT(*) >= 4;

SELECT
    role,
    COUNT(*) AS total_users,
    AVG(age) AS average_age,
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary
FROM users
WHERE age >= 20
GROUP BY role
HAVING COUNT(*) >= 2
ORDER BY total_users DESC;


SELECT name, age
FROM users
WHERE age = (
    SELECT MAX(age)
    FROM users
);







