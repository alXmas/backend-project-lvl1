import readlineSync from 'readline-sync'

console.log("Answer 'yes' if number even otherwise answer 'no'.");
const isEven = num => num % 2 === 0;

export function game(userName) {
  let count = 0;
  while(count != 3) {
    const question = Math.floor(Math.random() * (50 - 1)) + 1;
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer: ')
    const rightAnswer = (isEven(question) ? 'yes' : 'no');

    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(answer,"is wrong answer ;(. Correct answer was",rightAnswer,"\nLet's try again,",userName,'!');
      return;
    }
  }
  console.log('Congratulations,', userName, '!');
};
