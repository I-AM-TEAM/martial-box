#include <Arduino.h>
#include <ArduinoJson.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>

#include "LedButton.h"
#include "state.h"
#include "usage_pin.h"

LedButton btn1(LED_1_PIN, BTN_1_PIN);
LedButton btn2(LED_2_PIN, BTN_2_PIN);
LedButton btn3(LED_3_PIN, BTN_3_PIN);
LedButton btn4(LED_4_PIN, BTN_4_PIN);
LedButton btn5(LED_5_PIN, BTN_5_PIN);

WiFiClient client;
PubSubClient mqtt(client);

#define WIFI_SSID "SSID"
#define WIFI_PASSWORD "PASSWORD"

#define MQTT_BROKER "MQTT_BROKER"
#define MQTT_PORT 1883

void watchButtonState();
void attachBtnCallbacks();
void showIpAddress(IPAddress ip);

void onButtonPress(uint8_t btnId) {
  // this function is called when any buttons is pressed
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  showIpAddress(WiFi.localIP());

  mqtt.setServer(MQTT_BROKER, MQTT_PORT);
}

void loop() {
  // put your main code here, to run repeatedly:

  switch (getGameStatus()) {
    case GameStatus::START:
      /* code */
      break;
    case GameStatus::FINISHED:
      /* code */
      break;
    case GameStatus::READY:
      /* code */
      break;
  }

  watchButtonState();
}

void showIpAddress(IPAddress ip) {
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(ip);
}

void watchButtonState() {
  btn1.watch();
  btn2.watch();
  btn3.watch();
  btn4.watch();
  btn5.watch();
}

void attachBtnCallbacks() {
  btn1.setOnClick([]() { onButtonPress(1); });
  btn2.setOnClick([]() { onButtonPress(2); });
  btn3.setOnClick([]() { onButtonPress(3); });
  btn4.setOnClick([]() { onButtonPress(4); });
  btn5.setOnClick([]() { onButtonPress(5); });
}