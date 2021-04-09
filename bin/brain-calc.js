#!/usr/bin/env node

import { greeting } from '../src/index.js';
import { gameDescription, gameData } from '../src/games/calc.js'

greeting(gameData, gameDescription)
