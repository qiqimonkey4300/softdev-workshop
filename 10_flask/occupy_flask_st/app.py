# Clyde 'Thluffy' Sinclair
# SoftDev
# Oct 2021

import csv
import random

from flask import Flask
app = Flask(__name__) #create instance of class Flask

def open_file():
    # Opens file and formats into dictionary as Job Class: Percentage

    with open('occupations.csv', newline='') as f:
         reader = csv.reader(f)
         next(reader) #skips the first line

         occupations = {}

         for row in reader: #for each line in the file
            occupations[row[0]] = float(row[1])

    return occupations

def get_random(di):
    # Finds a random job occupation

    num = random.uniform(0, 99.8) # alternatively could have used random.random()*99.8

    for key in di:
        num -= di[key] # subtracts the percentage from the random number

        if (num <= 0):
            return key

    return -1

@app.route("/")       #assign fxn to route

def occupation_output():
    return(get_random(open_file()))

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()
