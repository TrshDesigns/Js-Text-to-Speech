
if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    alert("you're allowed to use text to speech in your current browser")
} else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
}

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10];
msg.volume = 1; // From 0 to 1
msg.rate = 10; // From 0.1 to 10
msg.pitch = 2; // From 0 to 2
msg.lang = 'en-US';

let = enable = prompt("do you want to allow this site to interact with your device hardware ")

speechSynthesis.speak(msg);
var msg = new SpeechSynthesisUtterance();
function speechstart() {
    message = document.getElementById("messager").value
    msg.text = message
    window.speechSynthesis.speak(msg);
}
//create a function to augment the volume using the input range with id volume
function volume() {
    var vol = document.getElementById("volume").value
    msg.volume = vol;
    //assign the value of the vol input to the paragraph with id current-volume
    document.getElementById("current-volume").innerText = vol;
}
//create a function to augment the pitch using the input range with id pitch
function pitch() {
    var pitch = document.getElementById("pitch").value
    msg.pitch = pitch;
    //assign the value of the pitch input to the paragraph with id current-pitch
    document.getElementById("current-pitch").innerText = pitch;
}

window.onload = function () {
    volume();
    pitch();
}