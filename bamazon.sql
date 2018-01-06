DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;


USE bamazon_db;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(255) NOT NULL,
  department_name VARCHAR(255) NOT NULL,
  price INTEGER NOT NULL,
  stock_quantity INTEGER NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("macbook","electronics" , 100,15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("speedway stout","beer" , 15, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("bicyle","sports" , 150, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("nintendo","electronics" , 200, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("men's sweater","mens clothing" , 45, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("headlamp","recreation" , 20, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("ski boots","sporting goods" , 400, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("acoustic guitar","music" , 250, 15);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("dress shoes","shoe" , 80, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("television","electronics" , 500, 20);

SELECT *FROM products;