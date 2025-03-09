CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    name VARCHAR(100) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employees (name, salary) VALUES ('John Doe', 50000);
INSERT INTO employees (name, salary) VALUES ('Jane Doe', 60000);
INSERT INTO employees (name, salary) VALUES ('Alice', 700);
INSERT INTO employees (name, salary) VALUES ('Bob', 800);
INSERT INTO employees (name, salary) VALUES ('Charlie', 900);
INSERT INTO employees (name, salary) VALUES ('David', 1000);
INSERT INTO employees (name, salary) VALUES ('Eve', 1100);