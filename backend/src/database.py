'''
Database
Filename: database.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains the database of the project

'''

import pickle
FILE_LOCATION = "database.p"

initial_object = {
    'emails': {}
}


def clear_store():
    store = database.get()
    store["emails"] = {}
    database.set(store)


def pickle_and_store(object_to_persist: dict):
    with open(FILE_LOCATION, "wb") as file:
        pickle.dump(object_to_persist, file)


def unpickle_and_load() -> dict:
    data_contents = {}
    with open(FILE_LOCATION, "rb") as file:
        data_contents = pickle.load(file)
    return data_contents


class Database:
    def __init__(self):
        try:
            self.__store = unpickle_and_load()
        except:
            self.__store = initial_object

    def get(self):
        return self.__store

    def set(self, store):
        if not isinstance(store, dict):
            raise TypeError('Store must be of type dictionary')
        self.__store = store
        pickle_and_store(self.__store)


global database
database = Database()
