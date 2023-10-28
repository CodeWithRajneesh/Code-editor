import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [code, setCode] = useState();
  const [isLocked, setIsLocked] = useState(false);

  const handleCopy = () => {
    if (!isLocked) {
      // Implement copy functionality here
      const textArea = document.createElement('textarea');
      textArea.value = code;
      document.body.appendChild(textArea);
      textArea.select();
      document.body.removeChild(textArea);
    }
  };

  const handleSave = () => {
    if (!isLocked) {
      // Implement save functionality here
      const blob = new Blob([code], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'code.txt';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="code-editor">
      <h2>Enter the text to analyze below</h2>
      <textarea
      placeholder="Leave a comment here ..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
        readOnly={isLocked}
      />
      <div className="buttons">
        <button onClick={handleCopy} className="copy-button">Copy</button>
        <button onClick={handleSave} className="save-button">Save</button>
        <button onClick={toggleLock} className={`lock-button ${isLocked ? 'locked' : ''}`}>
          {isLocked ? 'Unlock' : 'Lock'}
        </button>
      </div>
    </div>
  );
};

export default App;
