#!/usr/bin/env node

import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const main = () => {
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCount = 0;
  const rounds = 3;

  while (correctCount < rounds) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

main();