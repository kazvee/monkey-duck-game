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
        <div>
          <p>
            This is {displayedMonkey.name}! {displayedMonkey.emoji}
          </p>
          <p>Favorite Food: {displayedMonkey.favoriteFood}</p>
          <p>Species: {displayedMonkey.species}</p>
          <button onClick={handleMonkeyShuffle}>
            Ask {displayedMonkey.name} to Shuffle the Emojis
          </button>
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