#ifndef STATE_H
#define STATE_H

enum GameLevel { EASY, MEDIUM, HARD };
enum GameStatus { READY, START, FINISHED };

GameLevel gameLevel = GameLevel::EASY;
GameStatus gameStatus = GameStatus::READY;

void setGameLevel(GameLevel level) { gameLevel = level; }
void setGameStatus(GameStatus status) { gameStatus = status; }

GameStatus getGameStatus() { return gameStatus; }
GameLevel getGameLevel() { return gameLevel; }

#endif