import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://{user}:{password}@localhost/{dbname}")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
Beer = Base.classes.beer

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/home-page")
def main_viz():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

@app.route("/happiness")
def smiles():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

@app.route("/drinking")
def beers():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()


@app.route("/life-expectancy")
def lifetime():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    # Query 
    session.close()

    return jsonify()

if __name__ == '__main__':
    app.run(debug=True)
