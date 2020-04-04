import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
engine = create_engine("postgresql://postgres:password@localhost:5432/Happiness")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to the table
# beer = table name
# Make reference for each table
Happiness = Base.classes.happiness
Alcohol = Base.classes.alcohol

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################
@app.route("/home-page")
def main_viz():
    session = Session(engine)
    return render_template('Home_Page.html')

@app.route("/happiness")
def smiles():
    session = Session(engine)
     
    return render_template('index.html')


@app.route("/drinking")
def beers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    return render_template('Drinking.html')


@app.route("/life-expectancy")
def lifetime():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    return render_template('Life_Expentency.html')

if __name__ == '__main__':
    app.run(debug=True)
