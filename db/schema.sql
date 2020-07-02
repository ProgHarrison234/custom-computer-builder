CREATE DATABASE custom_computer_db;
USE custom_computer_db;

CREATE TABLE computer
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(60) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(255),
	price INT NOT NULL,
	PRIMARY KEY (id)
);
