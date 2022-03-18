from flask import Flask
from .settings.connection import connect_db
from flask_restful import Api
from .blacklist import BLACKLIST
from .settings.config import config_db, config_ma, config_bp, secret_key
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)
    connect_db(app)
    config_db(app)
    config_ma(app)
    config_bp(app)
    secret_key(app)
    return app

app = create_app()
api = Api(app)