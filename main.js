var SpeachRecognition = window.webkitSpeachRecognition;

var recognition = new SpeachRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

    console.log(event);

var Content = event.results[0] [0].transcript;

document.getElementById("textbox").innerHTML = Content;
console.log(Content);
}