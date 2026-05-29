import runGame from '../index.js';

export default () => {
  const a = Math.floor(Math.random() * 20) + 1;
  const b = Math.floor(Math.random() * 20) + 1;
  const ops = ['+', '-', '*'];
  const op = ops[Math.floor(Math.random() * 3)];
  let correct;
  if (op === '+') correct = a + b;
  else if (op === '-') correct = a - b;
  else correct = a * b;
  return [`${a} ${op} ${b}`, String(correct)];
};