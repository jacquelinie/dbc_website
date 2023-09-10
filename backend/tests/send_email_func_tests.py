from src.database import clear_store
from src.signup import signup
from src.email import send_email
import requests
import pytest

@pytest.fixture
def clear():
    clear_store()

def test_send_email(clear):
    customer_id = signup("Tester One", "soxreceiver@gmail.com")["customer_id"]
    request_data = send_email(customer_id)
    assert (customer_id == 0)
    assert (request_data == {})
