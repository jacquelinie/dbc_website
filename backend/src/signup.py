'''
Sign Up
Filename: signup.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains all functions related to signing up.

'''

import hashlib
from database import database
from error import InputError

def signup(name: str, email: str)->dict:
    store = database.get()
    users = store['users']

    # Error handling
    if name == None or email == None:
        raise InputError("Please enter a name and an email address")
    emails = [user["email"] for user in users.values()]
    if email in emails:
        raise InputError("Email has already been used")

    # Save email and name
    customer_id = len(users)
    users[customer_id] = { "name": name, "email": email }

    # Set store:
    store['users'] = users
    database.set(store)

    exportToExcel

    return { "customer_id": customer_id }


def exportToExcel():
    # TO DO

    return {}