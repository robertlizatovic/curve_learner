from flask import Flask, render_template, url_for, request, redirect
import pandas as pd
import numpy as np
import json

app = Flask(__name__)

@app.route("/")
def hello():
    return "hello, world!"

@app.route("/generate/<name>", methods=["GET"])
def generate(name):
    script_src = url_for("static", filename="test.js")
    return render_template("base.html", name=name, script_src=script_src)

@app.route("/plot")
def plot():
    """generates data plotting view"""
    script_src = url_for("static", filename="plot.js")
    return render_template("plot.html", script_src=script_src)

@app.route("/data", methods=["GET", "POST"])
def fetch_data():
    """creates a new curve"""
    if request.method == "GET":
        x = list(np.linspace(1, 100, 100))
        y = list(np.sin(x) + np.random.normal(size=100))
        data = {"x": x, "y": y}
        # serve the plotting data as json
        return json.dumps(data)
    else:
        data = request.get_json(force=True)
        print("*** returned JSON: ", data)
        return ""


if __name__ == "__main__":
    app.run(debug=True)
