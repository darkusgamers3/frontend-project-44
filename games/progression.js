import runGame from '../src/index.js';

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    const value = start + i * step;
    if (i === hiddenIndex) {
      progression.push('..');
    } else {
      progression.push(String(value));
    }
  }
  return progression;
};

const generateRound = () => {
  const length = Math.floor(Math.random() * 6) + 5; // от 5 до 10
  const start = Math.floor(Math.random() * 20) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hiddenIndex = Math.floor(Math.random() * length);
  const progression = generateProgression(start, step, length, hiddenIndex);
  const question = progression.join(' ');
  const correctAnswer = String(start + hiddenIndex * step);
  return { question, correctAnswer };
};

const rule = 'What number is missing in the progression?';

export default () => runGame(rule, generateRound);