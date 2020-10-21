from flask import Flask
from flask import request, jsonify
import random

import logging
log = logging.getLogger('werkzeug')
log.setLevel(logging.ERROR)

app = Flask(__name__)

@app.route('/coin',methods = ['POST'])
def bet():
    if request.method == 'POST':
        coin = request.get_json()
        bet = play(coin['bet'])            
        return (str(bet))

def play(bet):
    return True if bool(random.randint(0, 1)) == bet else False    