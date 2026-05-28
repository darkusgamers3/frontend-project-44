import runGame from '../src/index.js';

const calculate = (a, b, operator) => {
  if (operator === '+') {
    return a + b;
  }
  if (operator === '-') {
    return a - b;
  }
  if (operator === '*') {
    return a * b;
  }
  return null;
};

const getRandomNumber = (max = 20) => Math.floor(Math.random() * max) + 1;

const generateRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operators = ['+', '-', '*'];
  const operatorIndex = Math.floor(Math.random() * operators.length);
  const operator = operators[operatorIndex];
  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calculate(a, b, operator));
  return { question, correctAnswer };
};

const rule = 'What is the result of the expression?';

export default () => runGame(rule, generateRound);