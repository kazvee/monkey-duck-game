import React from 'react';
import shuffleArray from '../helpers/shuffleArray';

const ShowEmojis = ({ emojis }) => {

  const shuffledEmojis = shuffleArray([...emojis]);

  return (
    <div>
      <h1>Emojis</h1>
      <div className="emoji-container">
        {shuffledEmojis.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ShowEmojis;