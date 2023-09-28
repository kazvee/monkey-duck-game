import shuffleArray from './shuffleArray';

const addDucks = (shuffledEmojis, duckEmojis) => {
  const combinedEmojis = [...shuffledEmojis];

  duckEmojis.forEach((duck) => {
    combinedEmojis.push(duck);
  });

  const finalEmojis = shuffleArray(combinedEmojis);
  return finalEmojis;
};

export default addDucks;
