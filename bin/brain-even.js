#!/usr/bin/env node

import { greeting } from '../src/index.js';
import { gameDescription, gameData } from '../src/even.js'

greeting(gameData, gameDescription)
