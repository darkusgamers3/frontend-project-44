import runGame from '../src/index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = String(number);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runGame(rule, generateRound);