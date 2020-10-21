# main.py

# Let's get this party started!
import falcon
import json
import random


# Falcon follows the REST architectural style, meaning (among
# other things) that you think in terms of resources and state
# transitions, which map to HTTP verbs.
class Betme(object):
    def on_post(self, req, resp):
        bet = req.media['bet']        
        bet = play(bet)
        """Handles GET requests"""
        resp.status = falcon.HTTP_200  # This is the default status
        resp.body = (str(bet))

def play(bet):
    return True if bool(random.randint(0, 1)) == bet else False                      

# falcon.API instances are callable WSGI apps
app = falcon.API()

# Resources are represented by long-lived class instances
things = Betme()

# things will handle all requests to the '/things' URL path
app.add_route('/coin', things)