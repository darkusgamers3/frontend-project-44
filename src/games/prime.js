import runGame from '../index.js';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

export default () => {
  const num = Math.floor(Math.random() * 100) + 1;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [String(num), answer];
};