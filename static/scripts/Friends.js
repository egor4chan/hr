var WebApp = window.Telegram.WebApp;
var userTelegamID = WebApp.initDataUnsafe.user.id;
let userFriendsList = []

function createFriendBlock(id) {;

    let block = document.createElement('div')
    block.setAttribute('class', 'friend');

    let userNickname = document.createElement('span');
    userNickname.setAttribute('class', 'user-nickname')
    userNickname.innerHTML = id;

    let userID = document.createElement('span');
    userID.setAttribute('class', 'user-id')
    userID.innerHTML = `ID: ${id}`;

    let userImage = document.createElement('div');
    userImage.setAttribute('class', 'user-image');
    userImage.innerHTML = String(id)[0];
    
    block.appendChild(userID);
    block.appendChild(userNickname)
    block.appendChild(userImage)

    document.getElementById('friends-list-cloud').appendChild(block);
}

function createNothingBlock() {
    elem = document.createElement('h3');
    elem.innerHTML = "Here will be your friends"
    document.getElementById('friends-list-cloud').appendChild(elem)
}

function getUserFriends() {
    httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'getfriends');
    var data = JSON.stringify({"user_id": userTelegamID});

    httpRequest.send(data) 
     
    httpRequest.onprogress = function() {
        response = httpRequest.response;
        result = JSON.parse(response);
        result_len = JSON.parse(response).length;

        if (result_len != 0) {
            document.getElementById('herewillbe').remove()
        }
        
        for (let i=0; i!=result_len; i++) {
            userFriendsList.push(result[i].user_id) // result[i].user_id ==> user_id
            createFriendBlock(result[i].user_id)
        }
       // alert(userFriendsList)
    } 
    
} 



getUserFriends()