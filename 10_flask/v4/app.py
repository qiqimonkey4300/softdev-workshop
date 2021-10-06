# ubun3: Shyne Choi, Aaron Contreras, Sadid Ethun
# SoftDev
# K10 -- Putting Little Pieces Together / Flask Occupations
# 2021-10-05

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    print("the __name__ of this module is... ")
    print(__name__)
    return "No hablo queso!"

if __name__ == "__main__":  # true if this file NOT imported
    app.debug = True        # enable auto-reload upon code change
    app.run()

#prediction: It will print 'the __name-- o this module is...' in the terminal after quitting the app.
# Since line 14 is true, the result will be the same as v3
#actual: We were right :)
