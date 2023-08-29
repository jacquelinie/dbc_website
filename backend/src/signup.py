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
    emails = store['emails']

    # Error handling
    if name == None or email == None:
        raise InputError("Please enter a name and an email address")
    if email in emails.keys():
        raise InputError("Email has already been used")

    # Save email and name
    emails[email] = name
    customer_id = len(emails)

    # Set store:
    store['emails'] = emails
    database.set(store)

    exportToExcel

    return customer_id


def exportToExcel():
    # TO DO

    return {}