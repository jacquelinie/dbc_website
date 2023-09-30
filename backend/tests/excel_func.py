from src.signup import signup, export_to_excel
from src.database import clear_store
import requests
import pytest

def test_signup():
    clear_store()
    customer_id = signup("Tester One", "soxreceiver@gmail.com")
    result = export_to_excel(customer_id)
    assert (result == {}) # Success

