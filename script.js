'use strict'

const speech = new SpeechSynthesisUtterance();
 
let voices = [];

// ELEMENTS
const elements = {
    button: document.querySelector('#speakBtn'),
    voiceSelect:document.querySelector('#voiceSelect'),
    textInput: document.querySelector('#textInput')
}

function handelClick(){
    speech.text = elements.textInput.value;
    console.log(elements.textInput)
    window.speechSynthesis.speak(speech);
    console.log('btn')
}
 
function onVoicesChanged (){
    // get all voicese on the borwser
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    console.log(voices);

    elements.voiceSelect.innerHTML = ""; // clear old options

    voices.forEach((voice, index) => {
        const option = document.createElement("option");
        option.textContent = voice.name;
        option.value = index;
        elements.voiceSelect.appendChild(option);
    });
}

const useSelectVoice = () => speech.voice = voices[elements.voiceSelect.value];


// listener
function init(){
    elements.button.addEventListener('click',handelClick);
    window.speechSynthesis.onvoiceschanged = onVoicesChanged;
    elements.voiceSelect.addEventListener('change',useSelectVoice)
}



init();