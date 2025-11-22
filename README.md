Text-to-Voice Converter

A minimalist web app that converts written text into spoken audio using the browser’s built-in Speech Synthesis API.
Users can type or paste text, choose from the available system voices, and play the audio instantly.

Features

Convert any text into spoken audio

Dropdown list of all available system voices

Clean and minimal UI

No backend required (100% client-side)

Works on all modern browsers

Demo

Open index.html in your browser to use the app.
No installation needed.

How It Works

The app uses SpeechSynthesisUtterance to create a speech object.

speechSynthesis.getVoices() loads all available voices from the browser.

The selected voice is applied, and the text is spoken using speechSynthesis.speak().

Project Structure
text-to-voice/
│
├── index.html
├── style.css
└── script.js

Technologies Used

HTML
CSS
JavaScript
Web Speech API

License

This project is open-source and free to use.
