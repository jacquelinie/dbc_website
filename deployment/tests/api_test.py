import requests
import pytest

URL = "https://dreambodycoaching-env.eba-c3irpcdi.ap-southeast-2.elasticbeanstalk.com/signup"


def test_signup():
    request_data = requests.post("http://dreambodycoaching-env.eba-c3irpcdi.ap-southeast-2.elasticbeanstalk.com/signup", json={'name': "Tester Two", "email": "jacquelinechen777@gmail.com"})
    status = request_data.status_code
    print(request_data)
    assert (status == 200) # Success
