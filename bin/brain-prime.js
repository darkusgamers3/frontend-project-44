#!/usr/bin/env node

import runGame from '../src/index.js';
import getRound from '../src/games/prime.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', getRound);