import getRandomInRange from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = num => num % 2 === 0;

export const gameData = () => {
  const question = getRandomInRange(1,50);
  const rightAnswer = (isEven(question) ? 'yes' : 'no');

  return [question, rightAnswer]
};
