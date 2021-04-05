#!/usr/bin/env node
import { greeting } from '../src/cli.js';
import { game } from '../src/game.js'

const userName = greeting();
game(userName);
