
var WebApp = window.Telegram.WebApp;
alert('Webapp success!')
var userTelegamID = WebApp.initDataUnsafe.user.id;
alert(`UID is working: ${userTelegamID}`)
//var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = `https://t.me/share/url?url=t.me/hopterbigbot?startapp=${userTelegamID}`;
alert(`Perslink is working: ${personalLink}`)

function vibration() {
    var WebApp = window.Telegram.WebApp;
    WebApp.HapticFeedback.impactOccurred('light');
}

function invite() {
    vibration()
    window.location.href = personalLink;
}


