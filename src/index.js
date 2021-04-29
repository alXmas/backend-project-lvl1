import readlineSync from 'readline-sync';

export function startGame(gameData, gameDescription) {
  let gameCount = 0;
  const name = readlineSync.question('May i have your name?\n');
  console.log(`Hello, ${name}\n`);
  if (gameDescription.length === 0) {
    return
  }
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
