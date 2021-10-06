# ubun3: Shyne Choi, Aaron Contreras, Sadid Ethun
# SoftDev
# K10 -- Putting Little Pieces Together / Flask Occupations
# 2021-10-05

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("about to print __name__...")
    print(__name__)   #where will this go?
    return "No hablo queso!"

app.debug = True
app.run()

# predictions: In addition to v2, it will scan the code for bugs and print all bugs in the terminal
# actual: printed 3 extra lines in the terminal:
    # * Debugger is active!
    # * Debugger PIN: 225-526-073
    # * Restarting with stat
