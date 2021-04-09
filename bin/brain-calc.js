#!/usr/bin/env node

import { greeting } from '../src/index.js';
import { gameDescription, gameData } from '../src/calc.js'

greeting(gameData, gameDescription)
