import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (rule, generateRound) => {
  const name = greetUser();
  console.log(rule);

  const roundsToWin = 3;

  for (let i = 0; i < roundsToWin; i++) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;