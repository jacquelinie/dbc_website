# README.md

This is a repository for the dbc website coded by Jacqueline Chen and Mukund Rangarajan. The repository contains the following:

- backend directory which contains the backend code.
- frontend directory which contains the frontend code.
- tests folder which contains the tests for the backend code.
- requirements.txt file which includes the dependencies required to run the project.

## Running the Server
To run the server locally, execute the following command in a terminal from the root directory of the repository:

```
python3 -m src.server
```

The server will start running on the port specified in the src/config.py file.

## Running Tests
To run tests, open two terminals. In the first terminal, start the server by executing:

```
python3 -m src.server
```

In the second terminal, run the command:

```
python3 -m pytest (specific test file)
```

Or run as:

```
python3 -m pytest
```

to execute all tests.

