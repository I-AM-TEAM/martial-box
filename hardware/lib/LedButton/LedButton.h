#ifndef LED_BUTTON_H
#define LED_BUTTON_H

#include <Arduino.h>
#include <OneButton.h>

enum TimeResponse { SLOW, FAST, VERY_FAST };

typedef std::function<void()> callbackFunction;

class LedButton {
 private:
  /* data */
  uint8_t _ledPin, _buttonPin;
  OneButton *_btn;
  TimeResponse _timeResponse;
  unsigned long _timeWatcher;
  bool _activeState;

 public:
  LedButton();
  LedButton(uint8_t ledPin, uint8_t buttonPin);

  void setOnClick(callbackFunction onClick);
  void setLed(uint8_t state);
  void watch();
  void active();
  void inactive();

  bool isActive();
  void setActive(bool state);
  void setResponseTime(TimeResponse timeResponse);
  TimeResponse getTimeResponse();
};

#endif