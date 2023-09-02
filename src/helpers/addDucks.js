import shuffleArray from "./shuffleArray";

const addDucks = (shuffledEmojis, duckEmojis) => {
  const combinedEmojis = shuffledEmojis.concat(duckEmojis);
  const finalEmojis = shuffleArray(combinedEmojis);
  return finalEmojis;
};

export default addDucks;