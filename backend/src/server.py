'''
Server
Filename: server.py

Author: Jacqueline
Created: 28/8/2023
Description: Contains the all functionality related to the API server

'''

# Imports
import signal
import sys
from json import dumps
from flask import Flask, request, send_from_directory, send_file
from openpyxl import load_workbook, Workbook
from flask_cors import CORS

# Functions
from src import config
from src.signup import signup, export_to_excel
from src.email import send_email
from src.database import clear_store


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


# Running server
application = Flask(__name__, static_folder="../static", static_url_path='/static/')
CORS(application)

application.config['TRAP_HTTP_EXCEPTIONS'] = True
application.register_error_handler(Exception, default_handler)


# API Routes
@application.route('/static/<path:path>')
def serve_static_path(path):
    return send_from_directory('', path)


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


@application.route("/excel", methods=['POST'])
def handle_excel():
    excel_name = export_to_excel()["Excel"]
    wb = load_workbook(excel_name)
    wb.save(filename=excel_name)
    return send_file(excel_name, as_attachment=True, mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')


# To run the API server
if __name__ == "__main__":
    signal.signal(signal.SIGINT, quit_gracefully)
    application.run(port=config.port)