import React, { useState } from 'react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const App = () => {
  const [isListening, setIsListening] = useState(false);
  const [spokenText, setSpokenText] = useState('');

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    setSpokenText(transcript);
  };

  return (
    <div>
      <h1>Speech Recognition Example</h1>
      <button onClick={startListening} disabled={isListening}>Start Listening</button>
      <button onClick={stopListening} disabled={!isListening}>Stop Listening</button>
      <p>Spoken Text: {spokenText}</p>
    </div>
  );
};

export default App;
