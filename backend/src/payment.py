'''
Payment
Filename: payment.py

Author: Jacqueline
Created: 29/8/2023
Description: Handles the payment process for the customer

'''

import stripe
from src.database import database

stripe.api_key = "sk_test_51NmJ8xFpGEJAH0t4GRuvsDdwNXcfYnZgNyEnmN2yJqG0HvfLg4AUaddEBkSzrFPU0m2gebWSFICguxJIn3kQ55rd00HhStHZrX"

def make_payment(customer_id, email, amount):
    store = database.get()
    users = store['users']

