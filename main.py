from flask import Flask, render_template, request
import sql 

app = Flask(__name__)
data = sql.Data()

@app.route('/')
def mainPage():
    return render_template('index.html')

@app.route('/auth', methods=['POST'])
def auth_user():
    req = request.get_json(force=True, silent=True)

    try:
        user_id = int(req['user_id'])
        refer_id = int(req['refer_id'])

        data.Auth(user_id, refer_id)
    
        return 'True'
    except:
        user_id = int(req['user_id'])
        refer_id = 0

        data.Auth(user_id, refer_id)
        return 'False'

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)