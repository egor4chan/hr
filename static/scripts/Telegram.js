var WebApp = window.Telegram.WebApp;

var userTelegamID = WebApp.initDataUnsafe.user.id;
var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = 'https://t.me/share/url?url=t.me/hopterbigbot?startapp=' + userTelegamID;


function vibration() {
    WebApp.HapticFeedback.impactOccurred('light');
}

function invite() {
    vibration()
    window.location.href = personalLink;
}


