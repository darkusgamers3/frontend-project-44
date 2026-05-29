import runGame from '../index.js';

export default () => {
  const length = 10;
  const start = Math.floor(Math.random() * 50) + 1;
  const step = Math.floor(Math.random() * 10) + 1;
  const hidden = Math.floor(Math.random() * length);
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  const correct = progression[hidden];
  progression[hidden] = '..';
  return [progression.join(' '), String(correct)];
};