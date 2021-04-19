import getRandomInRange from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const buildGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return buildGcd(num2, num1 % num2);
};

export const gameData = () => {
  const number1 = getRandomInRange(0,50);
  const number2 = getRandomInRange(0,50);
  const question = `${number1} ${number2}`;
  const rightAnswer = buildGcd(number1, number2).toString();

  return [question, rightAnswer];
};
