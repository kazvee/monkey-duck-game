import React, { useState } from 'react';
import addMonkey from '../helpers/addMonkey';

const ShowMonkey = () => {
  const [displayedMonkey, setDisplayedMonkey] = useState(null);

  const handleGetRandomMonkey = () => {
    const randomMonkey = addMonkey();
    setDisplayedMonkey(randomMonkey);
  };

  return (
    <div>
      <button onClick={handleGetRandomMonkey}>Add a Monkey</button>
      {displayedMonkey && (
        <div>
          <p>This is {displayedMonkey.name}! {displayedMonkey.emoji}</p>
          <p>Favorite Food: {displayedMonkey.favoriteFood}</p>
          <p>Species: {displayedMonkey.species}</p>
        </div>
      )}
    </div>
  );
};

export default ShowMonkey;