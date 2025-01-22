from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def mainPage():
    return render_template('index.html')

# Hello via

if __name__ == '__main__':
    app.run()
