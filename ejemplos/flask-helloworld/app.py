from flask import Flask, request
from flask.json import jsonify

app = Flask(__name__)

@app.route('/login', methods=["GET", "POST"])
def login():
    user = ""
    info = ""

    if request.method == "POST":
        user = request.json["name"]
        info = request.json["info"]

    if request.method == "GET":
        user = "ruben"

    return jsonify(status="ok", name=user, info=info)


if __name__ == '__main__':
    app.run(debug=True)
