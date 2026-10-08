-- learning ALTER

CREATE TABLE students (
	id INT,
    name VARCHAR(50),
    age INT
);

SELECT * FROM students;

-- add a column
ALTER TABLE students
ADD email varchar(100);

-- add many columns
ALTER TABLE students
ADD phone VARCHAR(20),
ADD address VARCHAR(100);

-- modify a column
ALTER TABLE students
MODIFY name VARCHAR(100);

-- rename a column
ALTER TABLE students
RENAME COLUMN name TO full_name;

-- rename a column (another method)
ALTER TABLE students
CHANGE phone phone_no VARCHAR(15);
-- give datatype also

-- drop a column
ALTER TABLE students
DROP COLUMN address;

-- rename a table
ALTER TABLE students
RENAME TO learners;

SELECT * FROM learners;

-- add a constraint
ALTER TABLE learners
ADD PRIMARY KEY (id);

ALTER TABLE learners
ADD UNIQUE (email);

ALTER TABLE learners
DROP COLUMN ID;