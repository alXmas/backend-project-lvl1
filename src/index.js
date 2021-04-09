import readlineSync from 'readline-sync';

export function greeting(gameData, gameDescription) {
  let gameCount = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}\n`);
  console.log('');
  console.log(gameDescription);
  while(gameCount != 3) {
    const [question, rightAnswer] = gameData();
    const userAnswer = readlineSync.question(`Question: ${question} `);
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    gameCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
