import React, { useState, useEffect } from 'react';
import shuffleArray from '../helpers/shuffleArray';
import ducks from '../data/ducks';
import addDucks from '../helpers/addDucks';

const ShowEmojis = ({ emojis }) => {
  const [displayedEmojis, setDisplayedEmojis] = useState([]);
  const [ducksAdded, setDucksAdded] = useState(false);

  useEffect(() => {
    const shuffledEmojis = shuffleArray([...emojis]);
    setDisplayedEmojis(shuffledEmojis);
  }, [emojis]);

  const handleAddDucks = () => {
    if (!ducksAdded) {
      const finalEmojis = addDucks(displayedEmojis, ducks);
      const emojiStrings = finalEmojis.map((item) => {
        if (typeof item === 'object' && item.emoji) {
          return item.emoji;
        }
        return item;
      });
      setDisplayedEmojis(emojiStrings);
      setDucksAdded(true);
    }
  };

  return (
    <div>
      <h1>Emojis</h1>
      <button onClick={handleAddDucks}>Add Ducks</button>
      <div className="emoji-container">
        {displayedEmojis.map((emoji, index) => (
          <span key={index} className="emoji">
            {emoji}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ShowEmojis;