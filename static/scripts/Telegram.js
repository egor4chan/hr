
var WebApp = window.Telegram.WebApp;
alert('Webapp')
var userTelegamID = WebApp.initDataUnsafe.user.id;
alert(`UID is working: ${userTelegamID}`)
//var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = `t.me/share/url?url=t.me/hopterbigbot?startapp=${userTelegamID}`;
alert(`Perslink is working: ${personalLink}`)


function getInvite() {
    WebApp.HapticFeedback.impactOccurred('light');
    WebApp.openLink(personalLink);
}


