'''
Sign Up
Filename: signup.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains all functions related to signing up.

'''

import pandas as pd
import os
from openpyxl import load_workbook, Workbook
from src.database import database
from src.error import InputError
from src.email import send_email

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

    # send_email(customer_id)
    # export_to_excel(customer_id)
    # return {}
    return customer_id


def export_to_excel(customer_id):
    store = database.get()
    users = store['users']
    user = users[customer_id]

    # Check for excel file, if doesn't exist create it
    excel_name = "Customer Emails.xlsx"
    s_name = "Current Customers"
    if not os.path.exists(excel_name):
        Wb = Workbook()
        Wb.save(excel_name)
        # Create framework of excel
        df = pd.DataFrame(columns=["Name", "Email"])
        df.to_excel(excel_name, sheet_name=s_name)

    # Create data frame for customer
    data = {'Name': user["name"], 'Email': user["email"]}
    df = pd.DataFrame(data, index=[1])

    # Append to excel
    book = load_workbook(excel_name)
    writer = pd.ExcelWriter(excel_name, engine='openpyxl')
    writer.book = book

    df.to_excel(writer, index=False, header=False, sheet_name=s_name)

    writer.save()
    writer.close()

    return {}