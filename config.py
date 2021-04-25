""" Configuration settings are defined as class variables inside
the Config class.
"""
import os

class Config(object):
    FLASK_APP = os.environ.get('FLASK_APP') 
    FLASK_ENV = os.environ.get('FLASK_ENV') or 'you-are-not-supposed-to-do-something-with-this'
    FLASK_DEBUG = os.environ.get('FLASK_DEBUG') or 'you-are-not-supposed-to-do-something-with-this'