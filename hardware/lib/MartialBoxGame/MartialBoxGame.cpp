#include "MartialBoxGame.h"

MartialBoxGame::MartialBoxGame() {
  this->_btn[0] = new LedButton(LED_1_PIN, BTN_1_PIN);
  this->_btn[1] = new LedButton(LED_2_PIN, BTN_2_PIN);
  this->_btn[2] = new LedButton(LED_3_PIN, BTN_3_PIN);
  this->_btn[3] = new LedButton(LED_4_PIN, BTN_4_PIN);
  this->_btn[4] = new LedButton(LED_5_PIN, BTN_5_PIN);
}

void MartialBoxGame::setup() {
  for (int i = 0; i < 5; i++) {
    this->_btn[i]->setOnClick([this, i]() { this->_onButtonPress(this->_btn[i]); });
  }
}

void MartialBoxGame::play() {
  int8_t randomBtnNumber = random(0, 5);
  this->_btn[randomBtnNumber]->active();
}

bool MartialBoxGame::hasCurrentButtonActive() {
  for (int i = 0; i < 5; i++) {
    if (this->_btn[i]->isActive()) {
      return true;
    }
  }
  return false;
}

void MartialBoxGame::running() {
  for (int i = 0; i < 5; i++) {
    this->_btn[i]->watch();
  }
}

void MartialBoxGame::_onButtonPress(LedButton *btn) {
  if (btn->isActive()) {
    btn->inactive();

    // score should count here
  }
}