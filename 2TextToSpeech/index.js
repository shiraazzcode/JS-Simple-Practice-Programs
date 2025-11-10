
// text to speech

let text = document.getElementById("inputtext");
let btn = document.getElementById("convertbtn");

let speech = new SpeechSynthesisUtterance();

btn.addEventListener("click", ()=>{
    speech.text = text.value;
    window.speechSynthesis.speak(speech);
});