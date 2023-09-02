import monkeys from "../data/monkeys";

const getRandomMonkey = () => {
  return monkeys[Math.floor(Math.random() * monkeys.length)];
};

const addMonkey = () => {
  const randomMonkey = getRandomMonkey();
  return randomMonkey;
};

export default addMonkey;