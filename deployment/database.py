'''
Database
Filename: database.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains the database of the project

'''

initial_object = {
    'users': {}
}


def clear_store():
    store = database.get()
    store["users"] = {}
    database.set(store)

class Database:
    def __init__(self):
        self.__store = initial_object

    def get(self):
        return self.__store

    def set(self, store):
        if not isinstance(store, dict):
            raise TypeError('Store must be of type dictionary')
        self.__store = store


global database
database = Database()
