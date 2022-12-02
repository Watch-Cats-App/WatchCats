from flask import Flask
from flask import jsonify 
import json

app = Flask(__name__)

@app.route("/")
def hello_worldpythi():
    cats_json = ""
    with open('./cats.json', 'r', encoding='utf-8') as file:
        cats_json = json.load(file)
    return jsonify(cats_json)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1000)