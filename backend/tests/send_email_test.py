from src.config import port, url
from src import other
import requests
import pytest

@pytest.fixture
def clear():
    requests.delete(other.CLEAR_URL, json={})


def test_send_email(clear):
    customer_id = requests.post(other.SIGNUP_URL, json={'name': "Tester One", "email": "soxreceiver@gmail.com"}).json()["customer_id"]
    request_data = requests.post(other.EMAIL_URL, json={'customer_id': customer_id})
    status = request_data.status_code
    assert (status == 200) # Success
