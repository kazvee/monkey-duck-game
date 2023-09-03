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
    <p>
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
        <button onClick={handleGetRandomMonkey}>Add a Monkey</button>
      )}
    </p>
  );
};

export default ShowMonkey;