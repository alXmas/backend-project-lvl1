import getRandomInRange from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    default: return null;
    case ('+'): return num1 + num2;
    case ('-'): return num1 - num2;
    case ('*'): return num1 * num2;
  }
};

export const gameData = () => {
  const number1 = getRandomInRange(0,50);
  const number2 = getRandomInRange(0,50);
  const operator = operators[getRandomInRange(0,2)];
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = calculate(number1, number2, operator).toString();

  return [question, rightAnswer]
};
