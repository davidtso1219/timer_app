from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)
app.secret_key = app.config["SECRET_KEY"]

from app import routes

def create_app():
    return app