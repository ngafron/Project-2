import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///titanic.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Passenger = Base.classes.passenger

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/home-page")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

@app.route("/happiness")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

@app.route("/drinking")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()


@app.route("/life-expectancy")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

if __name__ == '__main__':
    app.run(debug=True)
