import type { MqttClient, IClientOptions } from 'mqtt';
import mqtt from 'mqtt';

const brokerUrl = process.env.MQTT_BROKER_URL || 'mqtt://test.mosquitto.org:1883';
const clientId = process.env.MQTT_CLIENT_ID || `client-${Date.now()}`;

const options: IClientOptions = {
  clientId,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
  clean: true,
  connectTimeout: 4000,
  reconnectPeriod: 5000,
};

const client: MqttClient = mqtt.connect(brokerUrl, options);

client.on('connect', () => {
  console.log(`Connected to MQTT broker at ${brokerUrl} with client ID ${clientId}`);
});

client.on('reconnect', () => console.log('🔁 [MQTT] Reconnecting...'));
client.on('error', (err) => console.error('❌ [MQTT] Error:', err.message));
client.on('offline', () => console.log('⚠️ [MQTT] Client offline'));
client.on('close', () => console.log('🚪 [MQTT] Connection closed'));

process.on('SIGINT', () => {
  console.log('🛑 [MQTT] Disconnecting gracefully...');
  client.end(false, () => process.exit(0));
});

export default client;
