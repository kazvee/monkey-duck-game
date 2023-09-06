import React, { useState } from 'react';
import addMonkey from '../helpers/addMonkey';

const ShowMonkey = ({ onMonkeyShuffle }) => {
  const [displayedMonkey, setDisplayedMonkey] = useState(null);

  const handleGetRandomMonkey = () => {
    const randomMonkey = addMonkey();
    setDisplayedMonkey(randomMonkey);
  };

  const handleMonkeyShuffle = () => {
    if (displayedMonkey) {
      onMonkeyShuffle();
    }
  };

  return (
    <div>
      {displayedMonkey ? (
        <div className='monkey-container'>
          <span className='monkey-emoji'>{displayedMonkey.emoji}</span>
          <p>
            <span className='strong'>This is {displayedMonkey.name}!</span>
          </p>
          <div className='monkey-details'>
            <p>
              <span className='strong'>Species:</span> {displayedMonkey.species}
            </p>
            <p>
              <span className='strong'>Favorite food: </span>
              {displayedMonkey.favoriteFood}
            </p>
          </div>
          <div>
            <button onClick={handleMonkeyShuffle}>
              Ask {displayedMonkey.name} to Shuffle the Emojis
            </button>
          </div>
        </div>
      ) : (
        <p>
          <button onClick={handleGetRandomMonkey}>Add a Monkey</button>
        </p>
      )}
    </div>
  );
};

export default ShowMonkey;