
var WebApp = window.Telegram.WebApp;
var userTelegamID = WebApp.initDataUnsafe.user.id;
var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = `https://t.me/share/url?url=t.me/hopterbigbot?startapp=${userTelegamID}`;

function copyLink() {
    WebApp.HapticFeedback.impactOccurred('light');
    navigator.clipboard.writeText(personalLink);
}

function getInvite() {
    WebApp.HapticFeedback.impactOccurred('light');
    window.location.href = personalLink;
}

function auth() {
    if (userReferID == undefined) {
        userReferID = 0;
    }

    httpRequest = new XMLHttpRequest();
    httpRequest.open('POST', 'auth');
    var data = JSON.stringify({"user_id": userTelegamID, "refer_id": userReferID});
    httpRequest.send(data);
}

auth()
