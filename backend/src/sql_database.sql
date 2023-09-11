"""
Sql Database
Filename: sql_database.sql

Author: Jacqueline
Created: 11/09/2023

Description: Store the data of the users
"""
create schema invoice_storage;
use invoice_storage;

-- create table users
create table users (
user_name varchar(40),
email varchar(60),
sessions varchar(150)
);
