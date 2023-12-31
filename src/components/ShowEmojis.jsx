import React, { useState, useEffect } from 'react';
import shuffleArray from '../helpers/shuffleArray';
import ducks from '../data/ducks';
import addDucks from '../helpers/addDucks';
import ShowMonkey from './ShowMonkey';
import addMonkey from '../helpers/addMonkey';
import ShowGameStats from './ShowGameStats';

const ShowEmojis = ({ emojis }) => {
  const [displayedEmojis, setDisplayedEmojis] = useState([]);
  const [ducksAdded, setDucksAdded] = useState(false);
  const [displayedMonkey, setDisplayedMonkey] = useState(null);
  const [winMessage, setWinMessage] = useState('');
  const [ducksInARow, setDucksInARow] = useState([]);

  useEffect(() => {
    const emojisCopy = [...emojis];
    const shuffledEmojis = shuffleArray(emojisCopy);
    setDisplayedEmojis(shuffledEmojis);
  }, [emojis]);

  const handleAddDucks = () => {
    if (!ducksAdded && !displayedMonkey) {
      const finalEmojis = addDucks(displayedEmojis, ducks);
      setDisplayedEmojis(finalEmojis);
      setDucksAdded(true);
      handleAddMonkey();
    }
  };
  const handleAddMonkey = () => {
    if (!displayedMonkey) {
      const monkey = addMonkey();
      setDisplayedMonkey(monkey);
    }
  };

  const handleMonkeyShuffle = (monkeyInfo) => {
    if (ducksAdded) {
      setWinMessage('');

      const emojisCopy = [...displayedEmojis];
      const shuffledEmojis = shuffleArray(emojisCopy);

      let streak = 0;
      let newDucksInARow = [];

      for (let i = 0; i < shuffledEmojis.length; i++) {
        const emojiItem = shuffledEmojis[i];
        if (emojiItem.favoriteFood) {
          streak++;
          newDucksInARow.push({
            name: emojiItem.name,
            favoriteFood: emojiItem.favoriteFood,
          });
        } else {
          streak = 0;
          newDucksInARow = [];
        }

        if (streak >= 2 && streak <= 5) {
          const updatedDucksInARow = [...ducksInARow, ...newDucksInARow];
          setDucksInARow(updatedDucksInARow);

          if (displayedMonkey) {
            const randomIndex = Math.floor(
              Math.random() * monkeyInfo.victoryMessages.length
            );
            const randomVictoryMessage =
              monkeyInfo.victoryMessages[randomIndex];

            const winMessage = (
              <div>
                <div className='winner-text'>🎉 WINNER! 🎉</div>
                You got {streak} ducks in a row:
                <ul>
                  {newDucksInARow.map((duck, index) => (
                    <li key={index}>{duck.name}</li>
                  ))}
                </ul>
                <div className='monkey-victory-name'>
                  {monkeyInfo.emoji} {monkeyInfo.name} says:{' '}
                  <span className='monkey-victory-message'>
                    {randomVictoryMessage}
                  </span>
                </div>
              </div>
            );
            setWinMessage(winMessage);
          }
        }
      }
      setDisplayedEmojis(shuffledEmojis);
    }
  };

  return (
    <div>
      <div className='emoji-container'>
        {displayedEmojis.map((item, index) => (
          <span key={index} className='emoji'>
            {typeof item === 'object' ? (
              <span>{item.emoji}</span>
            ) : (
              <span>{item}</span>
            )}
          </span>
        ))}
      </div>

      <div className='cards-container'>
        <div>
          <p>
            {!ducksAdded && <button onClick={handleAddDucks}>Add Ducks</button>}
          </p>
        </div>
      </div>

      <div className='cards-container'>
        {ducksAdded && displayedMonkey && (
          <div className='monkey-info'>
            <ShowMonkey
              displayedMonkey={displayedMonkey}
              onMonkeyShuffle={handleMonkeyShuffle}
            />
          </div>
        )}

        {displayedMonkey && winMessage && (
          <div className='game-stats'>
            <ShowGameStats winMessage={winMessage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowEmojis;
