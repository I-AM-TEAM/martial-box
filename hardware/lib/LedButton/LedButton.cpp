#include "LedButton.h"

LedButton::LedButton(uint8_t ledPin, uint8_t buttonPin) {
  this->_btn = new OneButton(buttonPin);
  this->_ledPin = ledPin;

  pinMode(ledPin, OUTPUT);
}

void LedButton::setOnClick(void (*onClick)()) { this->_btn->attachClick(onClick); }

void LedButton::setLed(uint8_t state) { digitalWrite(this->_ledPin, state); }

void LedButton::watch() { this->_btn->tick(); }
