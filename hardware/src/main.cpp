#include <Arduino.h>
#include <ArduinoJson.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>

#include "MartialBoxGame.h"

MartialBoxGame game;

WiFiClient client;
PubSubClient mqtt(client);

#define WIFI_SSID "SSID"
#define WIFI_PASSWORD "PASSWORD"

#define MQTT_BROKER "MQTT_BROKER"
#define MQTT_PORT 1883

void watchButtonState();
void attachBtnCallbacks();
void showIpAddress(IPAddress ip);

// void onButtonPress(uint8_t btnId) {
//   if (btn[btnId].isActive()) {
//     btn[btnId].inactive();
//     // score should count here
//   }
// }

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
  Serial.println("Program started1");

  // pinMode(LED_STRIP_PIN, OUTPUT);

  // for (int i = 0; i < 5; i++) {
  //   btn[i].setLed(HIGH);
  // }

  Serial.println("Program started");
}

// void play() {
//   for (int i = 0; i < 5; i++) {
//     if (btn[i].isActive()) {
//       return;
//     }
//   }

//   int8_t randomBtnNumber = random(0, 5);
//   btn[randomBtnNumber].active();
// }

void loop() {
  // put your main code here, to run repeatedly:
  switch (game.getGameStatus()) {
    case GameStatus::START:
      if (game.hasCurrentButtonActive()) return;
      game.play();
      break;
    case GameStatus::FINISHED:
      /* code */
      break;
    case GameStatus::READY:
      /* code */
      break;
  }

  game.running();
}

void showIpAddress(IPAddress ip) {
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(ip);
}

// void attachBtnCallbacks() {
//   for (int i = 0; i < 5; i++) {
//     btn[i].setOnClick([]() { onButtonPress(i); });
//   }
// }