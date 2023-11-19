
from flask import Flask
# Imports
import signal
import sys
from json import dumps
from flask import Flask, request, send_from_directory
from flask_cors import CORS

# Functions
from signup import signup
from database import clear_store


# Exit
def quit_gracefully(*args):
    sys.exit()


# Handler
def default_handler(err):
    response = err.get_response()
    print('response', err, err.get_response())
    response.data = dumps({
        "code": err.code,
        "name": "System Error",
        "message": err.get_description(),
    })
    response.content_type = 'application/json'
    return response

# EB looks for an 'application' callable by default.
application = Flask(__name__)
CORS(application)

application.config['TRAP_HTTP_EXCEPTIONS'] = True
application.register_error_handler(Exception, default_handler)


# API Routes
@application.route('/static/<path:path>')
def serve_static_path(path):
    return send_from_directory('', path)


@application.route('/', methods=['GET'])
def handle_home():
    return "Welcome to the DBC API deployment!"


@application.route("/clear", methods=['DELETE'])
def handle_clear():
    clear_store()
    return {}


@application.route("/signup", methods=['POST'])
def handle_signup():
    request_data = request.get_json()
    name = request_data.get('name', None)
    email = request_data.get('email', None)
    return signup(name, email)


# run the app.
if __name__ == "__main__":
    signal.signal(signal.SIGINT, quit_gracefully)
    application.debug = True # Remove before deploying
    application.run()