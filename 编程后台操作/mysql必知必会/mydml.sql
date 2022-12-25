USE MYSQLMUST;

SHOW COLUMNS FROM customers; 

SELECT prod_name FROM products;

SELECT * FROM products;

# 检索不同的行
SELECT DISTINCT vend_id FROM products;

INSERT INTO products(prod_id,vend_id,prod_name,prod_price,prod_desc)
VALUES('TNT3',1003,'TNT (5 sticks)',11.0,'TNT, red, pack os 12 sticks');

SELECT DISTINCT vend_id,prod_name FROM products;

# 有序输出
SELECT prod_id,prod_name,prod_price FROM products ORDER BY prod_price DESC,prod_name;


SELECT prod_id,prod_name,prod_price 
FROM products 
ORDER BY prod_price DESC 
LIMIT 1;


SELECT prod_name,prod_price
FROM products
WHERE prod_price=2.50;


SELECT prod_name,prod_price
FROM products
WHERE prod_name='fuses';


SELECT prod_name,prod_price
FROM products
WHERE prod_price<10;


SELECT prod_name,prod_price
FROM products
WHERE vend_id!=1003;


SELECT prod_name,prod_price
FROM products
WHERE prod_price BETWEEN 5 AND 10;


SELECT *
FROM customers
WHERE cust_email!='sam@yosemite.com';



