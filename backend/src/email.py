'''
Email
Filename: email.py

Author: Jacqueline
Created: 1/9/2023
Description: Sends the free materials to the user

'''

from src.error import AccessError, InputError
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders
import smtplib
from database import database

SENDER_EMAIL = "dreambody@gmail.com"
SENDER_PASS = "testerpass"

def send_email(customer_id):
    store = database.get()
    users = store['users']

    # Error checking and initiating variables
    if customer_id not in users.keys():
        raise AccessError("Customer does not have access")
    user = users[customer_id]
    recipient_email = user["email"]
    content = "Dear " + user["name"] + ", please find attached the free resources to help you achieve your fitness goals."

    # Create email object
    email = MIMEMultipart()
    email['Subject'] = "Dream Body Coaching" # message subject
    email['From'] = SENDER_EMAIL
    email['To'] = recipient_email
    email.attach(MIMEText(content))  # message body

    # Attach free resources
    pdfname = 'Free Resources.pdf'

    # open the file in bynary
    binary_pdf = open(pdfname, 'rb')

    payload = MIMEBase('application', 'octate-stream', Name=pdfname)
    payload.set_payload((binary_pdf).read())

    # enconding the binary into base64
    encoders.encode_base64(payload)

    # add header with pdf name
    payload.add_header('Content-Decomposition', 'attachment', filename=pdfname)
    email.attach(payload)

    # Login and send email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        # Login error
        try:
            server.login(SENDER_EMAIL, SENDER_PASS)
        except smtplib.SMTPAuthenticationError:
            raise InputError("An error has occurred while trying to connect to SMTP server.")
        server.sendmail(email['From'], email['To'], email.as_string())

    return {}