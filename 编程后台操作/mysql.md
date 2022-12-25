# MySql

## 1. 基础

### 1.1 mysql 安装

* docker 安装：

  1. 拉取docker镜像：`docker pull mysql:8.0.18`

  2. 运行mysql: `docker run -it --name mysql-test -p 3306:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql `

     MYSQL_ROOT_PASSWORD 为root的密码。

  3. 本机访问：`mysql -h localhost -u root -p`

### 1.2 SQL通用语法

SQL语句不区分大小写，语句之间以;分割。

* 注释：

* 单行注释：`--`注释内容或`#`注释内容
* 多行注释：`/*注释内容*/`

SQL语句的分类：

* DDL  Data Definition Language ：数据定义语句，用来定义数据库对象（数据库，表，字段）
* DML Data Manipulation Language: 数据操作语句，用于对表的数据进行增删改。
* DQL Data Query Language: 数据查询语句，用于对数据表的数据进行查找
* DCL Data Control Language：数据控制语句，用于创建数据库用户，控制数据的访问权限

### 1.3 DDL

1、DDL - 数据库操作

* 查询

  (1) 查询所有数据库

  ```mysql
  SHOW DATABASES;
  ```

  (2) 查询当前数据库

  ```mysql
  SELECT DATABASE();
  ```

* 创建

  ```MYSQL
  CREATE DATABASE [IF NOT EXISTS] 数据库名 [DEFAULT CHARSET 字符集] [COLLATE 排序规则];
  ```

* 删除

  ```mysql
  DROP DATABASE [IF EXISTS] 数据库名;
  ```

* 使用

  ```mysql
  USE DATABASE;
  ```

2、DDL - 表结构操作-查询

* 查询当前数据库所有表

  ```mysql
  SHOW TABLES;
  ```

* 查询表结构

  ```mysql
  DESC 表名;
  ```

* 查询指定表的建表语句

  ```mysql
  SHOW CREATE TABLE 表名;
  ```

3、DDL - 表结构操作-创建

* 创建表

  ```mysql
  CREATE TABLE 表名(
  	字段1 字段1的类型 [COMMENT 字段1的注释],
      字段2 字段2的类型 [COMMENT 字段2的注释],
      字段3 字段3的类型 [COMMENT 字段3的注释],
      ...
      字段n 字段n的类型 [COMMENT 字段n的注释]
  )[COMMENT 表注释];
  ```

4、DDL - 表结构操作-数据类型

* 数值类型：

  ![image-20220922003950596](E:\华为培训\编程后台操作\imgs\image-20220922003950596.png)

* 字符串型：

  ![image-20220922004118492](E:\华为培训\编程后台操作\imgs\image-20220922004118492.png)

* 日期时间类型：

  ![image-20220922004458084](E:\华为培训\编程后台操作\imgs\image-20220922004458084.png)

5、DDL - 表操作- 修改&删除

* 添加字段

  ```mysql
  ALTER TABLE 表名 ADD 字段名 类型 [COMMENT 注释] [拘束];
  ```

* 修改字段类型

  ```mysql
  ALTER TABLE 表名 MODIFY 字段名 新数据类型;
  ```

* 修改字段名和类型

  ```mysql
  ALTER TABLE 表名 CHANGE 旧字段名 新字段名 数据类型 [COMMENT 注释] [拘束];
  ```

* 删除字段

  ```mysql
  ALTER TABLE 表名 DROP 字段名;
  ```

* 修改表名

  ```mysql
  ALTER TABLE 表名 RENAME TO 新表名;
  ```

* 删除表

  ```mysql
  DROP TABLE [IF EXISTS] 表名;
  ```

* 删除表，并重新创建该表

  ```MYSQL
  TRUNCATE TABLE 表名;
  ```

### 1.4 DML