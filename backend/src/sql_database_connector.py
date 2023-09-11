"""
Sql Database Connector
Filename: sql_database_connector.py

Author: Jacqueline
Created: 11/09/2023

Description: Connector between sql database and python server
"""
import mysql.connector

# establish a connection to the database
###### Create database ######
# mydb = mysql.connector.connect(
#     user='root',
#     password='Zyq021113!',
#     host='localhost',
#     database='invoice_storage',
#     port='3306'
# )
# create a cursor object
mycursor = mydb.cursor()

# select data from users table
mycursor.execute('SELECT*FROM users')

users = mycursor.fetchall()
print("users data:")
for result in users:
    print(result)


# close the cursor and database connection
mycursor.close()
mydb.close()
