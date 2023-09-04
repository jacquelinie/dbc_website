'''
Payment
Filename: payment.py

Author: Jacqueline
Created: 29/8/2023
Description: Handles the payment process for the customer

'''

import stripe
from src.database import database

def make_payment(customer_id, email, amount):
    store = database.get()
    users = store['users']
    