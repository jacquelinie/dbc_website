'''
Email
Filename: email.py

Author: Jacqueline
Created: 1/9/2023
Description: Sends the free materials to the user

'''

from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from data_base import data_base

# Create a blank email
def create_email(sender_email, recipient_email, subject, content):
    store = data_base.get()
    emails = store['emails']

    # create message object, which we can modify.
    msg = MIMEMultipart()
    msg['Subject'] = subject  # message subject
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg.attach(MIMEText(content))  # message body

    email_id = len(emails)
    emails[email_id] = msg
    store['emails'] = emails
    data_base.set(store) # Store email

    return { 'email_id': email_id }