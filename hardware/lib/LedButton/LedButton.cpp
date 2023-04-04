#include "LedButton.h"

LedButton::LedButton(uint8_t ledPin, uint8_t buttonPin) {
  this->_btn = new OneButton(buttonPin);
  this->_ledPin = ledPin;
  this->_activeState = false;

  pinMode(ledPin, OUTPUT);
}

void LedButton::setOnClick(callbackFunction onClick) { this->_btn->attachClick(onClick); }

void LedButton::setLed(uint8_t state) { digitalWrite(this->_ledPin, state); }

void LedButton::watch() {
  unsigned long now = millis();
  if (now - this->_timeWatcher > this->_timeResponse && this->isActive()) {
    this->inactive();
  }

  this->_btn->tick();
}

void LedButton::active() {
  this->setLed(HIGH);
  this->setActive(true);
  this->_timeWatcher = millis();
}

void LedButton::inactive() {
  this->setLed(LOW);
  this->setActive(false);
  this->_timeWatcher = 0;
}

bool LedButton::isActive() { return this->_activeState; }
void LedButton::setActive(bool state) { this->_activeState = state; }
void LedButton::setResponseTime(TimeResponse timeResponse) { this->_timeResponse = timeResponse; }
TimeResponse LedButton::getTimeResponse() { return this->_timeResponse; }
