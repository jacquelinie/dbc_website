from src.signup import signup, export_to_excel
from src.database import clear_store
import requests
import pytest

def test_signup():
    clear_store()
    signup("Tester One", "soxreceiver@gmail.com")
    signup("Tester Two", "soxsreceiver@gmail.com")
    signup("Tester Three", "soxesreceiver@gmail.com")

    result = export_to_excel()
    excel = result["Excel"]
    print(excel)
    assert (result != {}) # Success

def test_signup():
    clear_store()
    signup("Tester One", "soxreceiver@gmail.com")
    signup("Tester Two", "soxsreceiver@gmail.com")
    signup("Tester Three", "soxesreceiver@gmail.com")
    assert True
