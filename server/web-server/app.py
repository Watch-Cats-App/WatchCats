from flask import Flask
from flask import jsonify 
import json

app = Flask(__name__)

def get_posts_from_file():
    cats_json = ""
    with open('./cats.json', 'r', encoding='utf-8') as file:
        cats_json = json.load(file)
    return jsonify(cats_json)

@app.route("/")
def home():
    resp = get_posts_from_file()
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return resp

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=1000)