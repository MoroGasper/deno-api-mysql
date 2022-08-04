CREATE DATABASE users;
USE users;
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  country VARCHAR(50) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
INSERT INTO users (name, country) VALUES ('John', 'USA');