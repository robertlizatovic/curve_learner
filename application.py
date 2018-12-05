from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route("/")
def hello():
    return "hello, world!"

@app.route("/generate/<name>", methods=["GET"])
def generate(name):
    script_src = url_for("static", filename="test.js")
    return render_template("base.html", name=name, script_src=script_src)

if __name__ == "__main__":
    app.run()