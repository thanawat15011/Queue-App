import React, { useState } from 'react';

const synth = window.speechSynthesis;

const App = () => {
  const [textToRead, setTextToRead] = useState('');

  const handleInputChange = (event) => {
    setTextToRead(event.target.value);
  };

  const handleReadText = () => {
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'th-TH'; // ระบุภาษาไทย
    utterance.rate = 0.5; // ความช้า, 1 เท่าคือปกติ
    synth.speak(utterance);
  };

  return (
    <div>
      <h1>Text-to-Speech Example (Thai)</h1>
      <textarea rows="4" cols="50" value={textToRead} onChange={handleInputChange} />
      <br />
      <button onClick={handleReadText}>Read Text (Slow)</button>
    </div>
  );
};

export default App;
