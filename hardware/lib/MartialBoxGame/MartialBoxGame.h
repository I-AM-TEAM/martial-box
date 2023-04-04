#ifndef MARTIAL_BOX_GAME_H
#define MARTIAL_BOX_GAME_H

#include <Arduino.h>

#include "LedButton.h"
#include "usage_pin.h"

enum GameLevel { EASY, MEDIUM, HARD };
enum GameStatus { READY, START, FINISHED };

class MartialBoxGame {
 private:
  /* data */
  GameLevel _gameLevel = GameLevel::EASY;
  GameStatus _gameStatus = GameStatus::READY;
  int _score = 0;
  LedButton *_btn[5];
  void _onButtonPress(LedButton *btn);

 public:
  MartialBoxGame();
  void setGameLevel(GameLevel level) { this->_gameLevel = level; }
  void setGameStatus(GameStatus status) { this->_gameStatus = status; }
  void setScore(int score) { this->_score = score; }
  void addScore(int score) { this->_score += score; }
  void setup();
  void play();
  void running();

  bool hasCurrentButtonActive();
  int getScore() { return this->_score; }
  GameStatus getGameStatus() { return this->_gameStatus; }
  GameLevel getGameLevel() { return this->_gameLevel; }
};

#endif
