'''
Sign Up
Filename: signup.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains all functions related to signing up.

'''

import hashlib
from database import database
from error import AccessError, InputError
import other as other
from time import time

MAX_FIRST_NAME_LENGTH = 50
MAX_LAST_NAME_LENGTH = 50
SENDER_ADDRESS = "seng2021sox@gmail.com"

def signup(name: str, email: str)->dict:
    store = database.get()
    emails = store['emails']

    if email in emails.keys():
        raise InputError("Email has already been used")
    else:
        emails[email] = name

    return {}


