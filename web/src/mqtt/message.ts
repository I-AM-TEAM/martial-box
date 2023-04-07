import { GameLevel } from '../../components/PreBattleForm';

export const MQTT_TOPIC = {
  COMMAND: 'game/command',
};

export const MQTTMessage = {
  command: (status: 'start', level: GameLevel) => {
    const command = {
      status,
      level,
    };

    return JSON.stringify(command);
  },
};
