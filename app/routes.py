from flask import render_template, request, flash
from app import app


@app.route('/')
def welcome():
    return render_template('index.html')


@app.route('/timer')
@app.route('/timer/<name>')
def next(name=None):
    return render_template('timer.html', name=name)