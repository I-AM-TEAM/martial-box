#ifndef LED_BUTTON_H
#define LED_BUTTON_H

#include <Arduino.h>
#include <OneButton.h>

class LedButton {
 private:
  /* data */
  uint8_t _ledPin;
  uint8_t _buttonPin;
  OneButton *_btn;

 public:
  LedButton(uint8_t ledPin, uint8_t buttonPin);

  void setOnClick(void (*onClick)(void));
  void setLed(uint8_t state);
  void watch();
};

#endif