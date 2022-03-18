[![Python Package](https://github.com/Suspir0n/Teste---Full-stack/actions/workflows/github-actions-demo.yml/badge.svg)](https://github.com/Suspir0n/Teste---Full-stack/actions/workflows/github-actions-demo.yml)


#  Teste Pratico Full Stack - API Rest in python flask

## Description
This project illustrates an api in python and Flask.

## Starting

To run the project, you will need to install the following programs:

- [Python: Required to create the project](https://www.python.org/downloads/)
- [Mysql: Required a database to create the tables etc](https://www.mysql.com/)
- [VS Code: For project development](https://code.visualstudio.com/)

## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Suspir0n/Teste---Full-stack.git)

Or use code locally using:
```
$ cd "directory of your choice"
$ git clone https://github.com/Suspir0n/Test---Full-stack.git
```

### Construction

To build the api with Flask, execute the commands below:

```
$ pip3 install -r requirements.txt
```

These are the requirements.txt dependencies:

```
aniso8601==9.0.1
attrs==21.4.0
click==8.0.4
Flask==2.0.3
flask-marshmallow==0.14.0
Flask-RESTful==0.3.9
Flask-SQLAlchemy==2.5.1
greenlet==1.1.2
iniconfig==1.1.1
itsdangerous==2.1.1
Jinja2==3.0.3
MarkupSafe==2.1.1
marshmallow==3.15.0
packaging==21.3
pluggy==1.0.0
py==1.11.0
PyMySQL==1.0.2
pyparsing==3.0.7
pytest==7.1.0
pytz==2021.3
six==1.16.0
SQLAlchemy==1.4.32
tomli==2.0.1
Werkzeug==2.0.3
```

Make these settings so that your Flask application works perfectly

In Windows
```
$ set FLASK_APP=yourfile.py
$ set FLASK_ENV=Development
$ set FLASK_DEBUG=True
```

In Mac or Linux
```
$ export FLASK_APP=yourfile.py
$ export FLASK_ENV=Development
$ export FLASK_DEBUG=True
```

#### Database configuration 

I will show you how to connect to the mySQL database 
and its configuration. Remember, it does not create the 
database alone or the table so you have to create the 
database and tables first.

```
def connect_db(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost:3306/yourdatabase'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
def config_db(app):
    db.init_app(app)
    app.app_context().push()
    db.create_all(app=app)
    app.db = db
```

After you set up the database, run your flask application
```
$ flask run
```

The exit:

```
* Serving Flask app "yourfile.py"
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

If you want to choose the host where it runs run this command

```
$ flask host 0.0.0.0
```


## Unit Test
The unit tests of routes were created using pytest, just run the command:

```
$ pytest tests\ -v -s
```

## Project Structure

```
|-- app
   |-- controllers
      |-- __init__.py
      |-- base_controller.py
      |-- people_controller.py
   |-- models
      |-- __init__.py
      |-- people_model.py
   |-- routes
      |-- __init__.py
      |-- people_routes.py
   |-- schemas
      |-- __init__.py
      |-- people_serealize.py
   |-- settings
      |-- __init__.py
      |-- config.py
      |-- connection.py
   |-- __init__.py
|-- tests
   |-- __init__.py
   |-- routes_people_test.py
   |-- app_test.py
   |-- conftest.py
|-- venv
|-- .gitignore
|-- __init__.py
|-- README.md    
|-- requirements.txt
```
app >> folder contains all API data, controlles, models, schemas, 
settings, all necessary data.
<br><br>
test folder >> contains route tests and field validation on the 
sad and happy path.
<br><br>
venv >> folder contains all the data of the premises that you 
will use.
<br><br>

## Features

The project can be used as a model to start the development of a Python project using Flask. It also demonstrates in a practical way how to create a Flask api quickly and easily.

## Configuration

To execute the project, it is necessary to use VsCode or an IDE of your preference, so that it identifies the dependencies necessary for execution in the repository. Once the project is imported, it will be possible to test its functionality in real time.

## Contributions

Contributions are always welcome! I hope I have helped someone in need.

## 🔓 License
MIT © [Evandro Silva](https://www.linkedin.com/in/suspir0n/)
