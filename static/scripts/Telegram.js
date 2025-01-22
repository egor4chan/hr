
var WebApp = window.Telegram.WebApp;
var userTelegamID = WebApp.initDataUnsafe.user.id;
//var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = `https://t.me/share/url?url=t.me/hopterbigbot?startapp=${userTelegamID}`;

function copyLink() {
    WebApp.HapticFeedback.impactOccurred('light');
    navigator.clipboard.writeText(personalLink);
}

function getInvite() {
    WebApp.HapticFeedback.impactOccurred('light');
    window.location.href = personalLink;
}


