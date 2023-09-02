import React from 'react';

const ShowEmojis = ({ emojis }) => {
  return (
    <div>
      <h1>Emojis</h1>
      <div className="emoji-container">
        {emojis.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ShowEmojis;