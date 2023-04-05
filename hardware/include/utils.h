#include <Arduino.h>

String byteArrayToString(byte *payload) {
  String s = "";
  for (size_t i = 0; i < sizeof(payload); i++) {
    /* code */
    s += (char)payload[i];
  }
  return s;
}