#!/usr/bin/env node

import runGame from '../src/index.js';
import getRound from '../src/games/calc.js';

runGame('What is the result of the expression?', getRound);