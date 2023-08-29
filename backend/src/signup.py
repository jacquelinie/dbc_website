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

    if email in emails.keys():
        raise InputError("Email has already been used")
    else:
        emails[email] = name
        exportToExcel

    return {}


def exportToExcel():
    # TO DO

    return {}