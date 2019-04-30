from flask import Flask, redirect, url_for, escape, request, render_template
import dados

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html',
        title='Título',
    )


@app.route('/renda/')
def renda():
    return render_template('index.html',
        title='Renda por grupo social',
    )

