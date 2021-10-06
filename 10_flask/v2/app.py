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

app.run()

# prediction:prints about to print __name__... and then __main__
    # after quitting the program in the terminal
# actual: we were right!! :)
