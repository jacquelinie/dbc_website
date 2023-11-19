'''
Email
Filename: email.py

Author: Jacqueline
Created: 1/9/2023
Description: Sends the free materials to the user

'''
from error import AccessError, InputError
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders
import smtplib
from database import database

SENDER_EMAIL = "dbctesteremail@gmail.com"
SENDER_PASS = "qyahwdqeiknagmqa"
RESOURCE_LIST = ["directory/Resource1.pdf", "directory/Resource2.pdf", "directory/Resource3.pdf", "directory/Resource4.pdf"]
DIRECTORY_NAME = "src/"

def send_email(customer_id):
    store = database.get()
    users = store['users']

    # Error checking and initiating variables
    if customer_id not in users.keys():
        raise AccessError("Customer does not have access")
    user = users[customer_id]
    recipient_email = user["email"]
    content = "Dear " + user["name"] + ", \nPlease find attached the free resources to help you achieve your fitness goals.\n\nYours sincerely,\nDream Body Coaching.\n(+61) 416156733\ndreambodycoaching@gmail.com"

    # Create email object
    email = MIMEMultipart()
    email['Subject'] = "Dream Body Coaching Resources" # message subject
    email['From'] = SENDER_EMAIL
    email['To'] = recipient_email
    email.attach(MIMEText(content))  # message body

    for resource in RESOURCE_LIST:
        attach_resources(email, resource)

    # Login and send email
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        # Login error
        try:
            server.login(SENDER_EMAIL, SENDER_PASS)
        except smtplib.SMTPAuthenticationError:
            raise InputError("An error has occurred while trying to connect to SMTP server.")
        server.sendmail(SENDER_EMAIL, recipient_email, email.as_string())

    return {}

def attach_resources(email, resource):
    # Remove directory name
    pdfname = resource.replace("directory/", "")
    pathname = resource.replace("directory/", DIRECTORY_NAME)

    # Open file in binary and encode into base64
    binary_pdf = open(pathname, 'rb')
    payload = MIMEBase('application', 'octate-stream', Name=pdfname)
    payload.set_payload((binary_pdf).read())
    encoders.encode_base64(payload)

    # Add header of pdf
    payload.add_header('Content-Decomposition', 'attachment', filename=pdfname)

    # Attach
    email.attach(payload)