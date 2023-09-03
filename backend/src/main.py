from signup import signup
from email import send_email
from src.error import AccessError, InputError
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email.mime.text import MIMEText
from email import encoders
import smtplib
from database import database

def main():
    customer_id = signup("Tester One", "soxreceiver@gmail.com")["customer_id"]
    request_data = send_email(customer_id)
    assert (customer_id == 0)
    assert (request_data == {})


if __name__ == "__main__":
    main()
