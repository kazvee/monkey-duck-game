import React, { useState, useEffect } from 'react';
import shuffleArray from '../helpers/shuffleArray';
import ducks from '../data/ducks';
import addDucks from '../helpers/addDucks';
import ShowMonkey from './ShowMonkey';
import addMonkey from '../helpers/addMonkey';

const ShowEmojis = ({ emojis }) => {
  const [displayedEmojis, setDisplayedEmojis] = useState([]);
  const [ducksAdded, setDucksAdded] = useState(false);
  const [displayedMonkey, setDisplayedMonkey] = useState(null);

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

      const monkey = addMonkey();
      setDisplayedMonkey(monkey);
    }
  };

  const handleMonkeyShuffle = () => {
    if (ducksAdded) {
      const shuffledEmojis = shuffleArray([...displayedEmojis]);
      setDisplayedEmojis(shuffledEmojis);

      let currentStreak = 0;
      let maxStreak = 0;

      for (let i = 0; i < shuffledEmojis.length; i++) {
        if (shuffledEmojis[i] === '🦆') {
          currentStreak++;
          if (currentStreak >= 5) {
            maxStreak = 5;
          } else if (currentStreak > maxStreak) {
            maxStreak = currentStreak;
          }
        } else {
          currentStreak = 0;
        }
      }

      switch (maxStreak) {
        case 5:
          console.log('Congratulations! You got 5 ducks in a row! 🎉');
          break;
        case 4:
          console.log('Congratulations! You got 4 ducks in a row! 🎉');
          break;
        case 3:
          console.log('Congratulations! You got 3 ducks in a row! 🎉');
          break;
        case 2:
          console.log('Congratulations! You got 2 ducks in a row! 🎉');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <h1>Emojis</h1>

      <div className='emoji-container'>
        {displayedEmojis.map((emoji, index) => (
          <span key={index} className='emoji'>
            {emoji}
          </span>
        ))}
      </div>

      {ducksAdded && displayedMonkey && (
        <div className='monkey-info'>
          <ShowMonkey
            displayedMonkey={displayedMonkey}
            onMonkeyShuffle={handleMonkeyShuffle}
          />
        </div>
      )}

      <p>
        {!ducksAdded && <button onClick={handleAddDucks}>Add Ducks</button>}
      </p>
    </div>
  );
};

export default ShowEmojis;
