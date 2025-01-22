var WebApp = window.Telegram.WebApp;

function vibration() {
    WebApp.HapticFeedback.impactOccurred('light');
}

var userTelegamID = WebApp.initDataUnsafe.user.id;
var userReferID = WebApp.initDataUnsafe.start_param;
var personalLink = 't.me/share/url?url=t.me/hopterbigbot?startapp=' + userTelegamID;


document.querySelector('#copy').addEventListener('click', e => {
    vibration();
    var inp = document.createElement('input')
    inp.value = "Hi! I'm copied by button"
    document.body.appendChild(inp)
    inp.select()
    
    if (document.execCommand('copy')) {
      console.log("Done!")
    } else {
      console.log("Failed...")
    }
    
    document.body.removeChild(inp)
  })