from src.config import port, url
from src import other
import requests
import pytest

@pytest.fixture
def clear():
    requests.delete(other.CLEAR_URL, json={})


def test_getexcel(clear):
    requests.post(other.SIGNUP_URL, json={'name': "Tester One", "email": "dbctesteremail@gmail.com"})
    requests.post(other.SIGNUP_URL, json={'name': "Tester Two", "email": "soxreceiveremail@gmail.com"})
    requests.post(other.SIGNUP_URL, json={'name': "Tester Three", "email": "soxreceiver2email@gmail.com"})

    request_data = requests.post(other.EXCEL_URL, json={})
    status = request_data.status_code
    assert (status == 200) # Success

