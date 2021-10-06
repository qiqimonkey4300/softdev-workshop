## ubun3: Shyne Choi, Aaron Contreras, Sadid Ethun
# SoftDev
# K10 -- Putting Little Pieces Together / Flask Occupations
# 2021-10-05

from flask import Flask
app = Flask(__name__) #create instance of class Flask

@app.route("/")       #assign fxn to route
def hello_world():
    return "No hablo queso!"

app.run()

#prediction: won't print url info to the terminal, but website will still be generated
#actual: nothing prints after using the link
