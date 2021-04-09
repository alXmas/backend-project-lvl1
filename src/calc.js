export const gameDescription = 'What is the result of the expression?';


const operators = ['+', '-', '*'];

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case ('+'): return num1 + num2;
    case ('-'): return num1 - num2;
    case ('*'): return num1 * num2;
    default: return null;
  }
};

export const gameData = () => {
  const number1 = Math.floor(Math.random() * (50 - 1)) + 1;
  const number2 = Math.floor(Math.random() * (50 - 1)) + 1;
  const operator = operators[Math.floor(Math.random() * (3 - 1)) + 1];
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = calculate(number1, number2, operator);

  return [question, rightAnswer]
};
