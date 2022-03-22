if ('speechSynthesis' in window) {
    // Speech Synthesis supported 🎉
    alert("you're allowed to use text to speech in your current browser")
    var activation = prompt("do you want to allow this site to use your hardware")
    if (activation == "yes") {
        /*
        Wave settings
        */
        var msg = new SpeechSynthesisUtterance();
        //create a select element with each option being a voice of the voices
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[10];
        msg.volume = 1; // From 0 to 1
        msg.rate = 10; // From 0.1 to 10
        msg.pitch = 2; // From 0 to 2
        msg.lang = 'en-US';


        speechSynthesis.speak(msg);
        var msg = new SpeechSynthesisUtterance();
        function speechStart() {
            message = document.getElementById("messager").value
            msg.text = message;
            window.speechSynthesis.speak(msg);
        }
        //create a function to stop the speech
        let speechActive = window.speechSynthesis.speaking;

        function speechStop() {
            if (speechActive == true) {
                window.speechSynthesis.cancel();
            }
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
        //create a function to augment the rate using the input range with id rate
        function rate() {
            var rate = document.getElementById("rate").value
            msg.rate = rate;
            //assign the value of the rate input to the paragraph with id current-rate
            document.getElementById("current-rate").innerText = rate;
        }
    } else {
        //show a message informing that to use the site you need to answer yes to the question
        alert("you need to allow this site to use your hardware to use text to speech")
        //reload window
        window.location.reload()
    }

} else {
    // Speech Synthesis Not Supported 😣
    alert("Sorry, your browser doesn't support text to speech!");
}

window.onload = function () {
    volume();
    pitch();
    rate();
}