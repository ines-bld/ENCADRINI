# ENCADRINI

# notes:
files (handlerController.js , handler.js , Hello.js ) are here just as an exemple 


# database:
to copy database to your server :
drop database if exists ENCADRINI;
create database if not exists ENCADRINI;
use ENCADRINI;

open prompt command as administrator and :
 cd C:\Program Files\MySQL\"MySQL Server 8.0" \bin
mysql -u root -p ENCADRINI < [path]\ENCADRINI\encadrini-back\ENCADRINIDB.sql
enter your password 
