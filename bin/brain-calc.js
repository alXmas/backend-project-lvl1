#!/usr/bin/env node

import { startGame } from '../src/index.js';
import { gameDescription, gameData } from '../src/games/calc.js'

startGame(gameData, gameDescription)
