import getRandomInRange from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const makeQuestion = (firstElement, diff, elementIndex, length) => {
  let data = '';
  for (let i = 0; i < length; i += 1) {
    if (i === elementIndex) data = `${data} .. `;
    else data = `${data} ${firstElement + diff * (i - 1)}`;
  }
  return data;
};

export const gameData = () => {
  const begin = getRandomInRange(1, 10);
  const difference = getRandomInRange(1, 10);
  const missingElementIndex = getRandomInRange(1, progressionLength);
  const rightAnswer = (begin + difference * (missingElementIndex - 1)).toString();
  const question = makeQuestion(begin, difference, missingElementIndex, progressionLength);

  return [question, rightAnswer];
};
