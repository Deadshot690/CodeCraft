
/**
 * @fileOverview This file acts as an aggregator for all game and user data,
 * importing from specific data files and re-exporting them for easy access
 * throughout the application.
 */

import { tasks } from './tasks-data';
import { user } from './user-data';
import { games } from './games-data';
import { monsters, battleQuestions, playerDialogues } from './monster-battle-data';
import { debugChallenges } from './debug-hunt-data';

export {
    tasks,
    user,
    games,
    monsters,
    battleQuestions,
    playerDialogues,
    debugChallenges
};
