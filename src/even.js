export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = num => num % 2 === 0;

export const gameData = () => {
  const question = Math.floor(Math.random() * (50 - 1)) + 1;
  const rightAnswer = (isEven(question) ? 'yes' : 'no');

  return [question, rightAnswer]
};
