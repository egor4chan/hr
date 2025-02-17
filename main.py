from flask import Flask, render_template, request
import sql 

app = Flask(__name__)
data = sql.Data()

@app.route('/')
def mainPage():
    return render_template('main.html')

@app.route('/friends')
def friendsPage():

    return render_template('index.html')

@app.route('/auth', methods=['POST'])
def auth_user():
    req = request.get_json(force=True, silent=True)
    try:
        user_id = int(req['user_id'])
        refer_id = int(req['refer_id'])
        username = req['username']
        
        data.Auth(user_id, username, refer_id)
        return 'True'
    except:
        user_id = int(req['user_id'])
        refer_id = 0

        if req['username']:
            username = req['username']
        else:
            username = 'user'

        data.Auth(user_id, username, refer_id)
        return 'False'
    
@app.route('/getfriends', methods=['POST'])
def getFriends():
    req = request.get_json(force=True, silent=True)
    try:
        user_id = int(req['user_id'])
        friends = data.GetReferrals(user_id)
        usernames = data.GetReferralsNicknames(user_id)

        return [friends, usernames]
    except:
        print('Something error on event <get friends>')
        return False

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)