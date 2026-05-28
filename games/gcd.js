import runGame from '../src/index.js';

const gcd = (a, b) => {
  let first = a;
  let second = b;
  while (second !== 0) {
    const temp = second;
    second = first % second;
    first = temp;
  }
  return first;
};

const generateRound = () => {
  const a = Math.floor(Math.random() * 50) + 1;
  const b = Math.floor(Math.random() * 50) + 1;
  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));
  return { question, correctAnswer };
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => runGame(rule, generateRound);