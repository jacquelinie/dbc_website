from src.signup import signup
from src.database import clear_store
import requests
import pytest

def test_signup():
    clear_store()
    result = signup("Tester One", "soxreceiver@gmail.com")
    assert (result == {}) # Success

