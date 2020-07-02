CREATE DATABASE custom_computer_db;
USE custom_computer_db;

CREATE TABLE gaming
(
	id int NOT NULL AUTO_INCREMENT,
	component varchar(60) NOT NULL,
	section VARCHAR(20) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(255),
	price INT NOT NULL,
	rating VARCHAR(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE mediacenter
(
	id int NOT NULL AUTO_INCREMENT,
	component varchar(60) NOT NULL,
	section VARCHAR(20) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(255),
	price INT NOT NULL,
	rating VARCHAR(10) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE workstation
(
	id int NOT NULL AUTO_INCREMENT,
	component varchar(60) NOT NULL,
	section VARCHAR(20) NOT NULL,
    name varchar(100) NOT NULL,
    description varchar(255),
	price INT NOT NULL,
	rating VARCHAR(10) NOT NULL,
	PRIMARY KEY (id)
);
