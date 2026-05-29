import runGame from '../index.js';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export default () => {
  const a = Math.floor(Math.random() * 50) + 1;
  const b = Math.floor(Math.random() * 50) + 1;
  const correct = gcd(a, b);
  return [`${a} ${b}`, String(correct)];
};
