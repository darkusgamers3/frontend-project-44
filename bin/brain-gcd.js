#!/usr/bin/env node

import runGame from '../src/index.js';
import getRound from '../src/games/gcd.js';

runGame('Find the greatest common divisor of given numbers.', getRound);