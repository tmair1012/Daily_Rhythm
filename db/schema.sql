DROP DATABASE IF EXISTS dailyRhythm;

CREATE DATABASE dailyRhythm;


CREATE TABLE taskMain
ID INTEGER PRIMARY KEY AUTOINCREMENT,
task_name VARCHAR(255) NOT NULL,
task_description VARCHAR(255) NOT NULL,
