#include <Arduino.h>
#include <ArduinoJson.h>
#include <PubSubClient.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiClientSecure.h>

#include "MartialBoxGame.h"
#include "utils.h"

#define GAME_COMMAND_TOPIC "game/command"
#define GAME_SCORE_TOPIC "game/score"

MartialBoxGame game;

WiFiClient client;
PubSubClient mqtt(client);

void showIpAddress(IPAddress ip);
bool reconnect();
bool connectMqttBroker();

unsigned long lastReconnectAttempt = 0;

void onMqttMessage(char *topic, byte *payload, unsigned int length) {
  if (strcmp(topic, GAME_COMMAND_TOPIC) == 0) {
    String jsonString = byteArrayToString(payload);
    DynamicJsonDocument doc(128);
    deserializeJson(doc, jsonString);
    String status = doc["status"].as<String>();
    GameLevel level = doc["level"].as<GameLevel>();

    if (status.equals("start")) {
      game.setGameStatus(GameStatus::START);
      game.setGameLevel(level);
    } else if (status.equals("stop")) {
      game.setGameStatus(GameStatus::FINISHED);
    }
  }
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
  mqtt.setCallback(onMqttMessage);

  game.setCallbackOnScoreChange([](int score) {
    DynamicJsonDocument doc(256);
    doc["player"] = PLAYER;
    doc["score"] = game.getScore();

    mqtt.beginPublish(GAME_SCORE_TOPIC, doc.size(), false);
    serializeJson(doc, mqtt);
    mqtt.endPublish();
  });
  game.setup();

  Serial.println("Program started");
}

void loop() {
  // put your main code here, to run repeatedly:
  if (!connectMqttBroker()) {
    Serial.println("Failed to connect to MQTT broker");
    delay(1000);
    return;
  }

  switch (game.getGameStatus()) {
    case GameStatus::START:
      if (game.hasCurrentButtonActive()) return;
      game.play();
      break;
    case GameStatus::FINISHED:
      /* code */
      game.setScore(0);
      game.setGameStatus(GameStatus::READY);
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

bool reconnect() {
  String clientId = "client-" + String(ESP.getEfuseMac(), HEX);
  String willMessage = "{\"player\":" + String(PLAYER) + "}";
  if (mqtt.connect(clientId.c_str(), "game/disconnect", 0, false, willMessage.c_str())) {
    // subscribe to the topic here
    mqtt.subscribe("game/command");
  }
  return mqtt.connected();
}

bool connectMqttBroker() {
  if (!mqtt.connected()) {
    long now = millis();
    if (now - lastReconnectAttempt > 5000) {
      lastReconnectAttempt = now;
      // Attempt to reconnect
      if (reconnect()) {
        lastReconnectAttempt = 0;
        return true;
      }
    }
  }
  return mqtt.connected();
}
