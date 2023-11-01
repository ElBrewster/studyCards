## MySQL Database [sobs in developer]

[From](https://dev.mysql.com/doc/mysql-getting-started/en/#mysql-getting-started-installing)

- The recommended way for installing MySQL on macOS is to use the macOS installer package.
- Before proceeding with the installation, be sure to stop all running MySQL server instances by using either the MySQL Manager Application (on macOS Server), the preference pane, or mysqladmin shutdown on the command line. [ref](https://dev.mysql.com/doc/refman/8.0/en/macos-installation-pkg.html)

1. [Downloaded](https://dev.mysql.com/downloads/file/?id=518602)
2. Installed package and set up password for the root user
3. Added MySQL workbench, but had to do the archived version per my mac, even tho site said 12 was compatable with 13
   [ref](https://www.youtube.com/watch?v=7S_tz1z_5bA)
   "sys" is MySQL's internal DB
   Tables
   Views
   Stored Procedures
   Functions

## Command Line Stuffs

brew install mysql
mysql -u root -p;
(enter password)
CREATE DATABASE _database_name_
verify MySQL is installed: `type -a mysql` in terminal
set up MySQL Workbench

## Trivias

MySQL is a widely used relational database management system (RDBMS).
What is a database?
A collection of data stored in a format that can easily be accessed.
We use a software aplication called database management system or DBMS.
We connect to DBMS and give it instructrions for querying or modifying data.
The DBMS will execute our instructions and send the results back.
2 kinds DBMS: Relational (uses SQL language to query or modify data), or NoSQL/non-relational db
(popular: MySQL, SQL Server, Oracle, he left out PostgreSQL)
You can say it S-Q-L or 'Sequel' (maybe S-Q-L is less English-speaking centric)
Let's learn SQL with MySQL!

[Express.js/Node integration](https://expressjs.com/en/guide/database-integration.html#mysql)
