import client from '../config/mqtt';

const topicsToSubscribe = [
  'gateway-001',
  'gateway-002',
  'gateway-003',
  'gateway-004',
  'gateway-005',
  'testing',
];

client.on('connect', () => {
  client.subscribe(topicsToSubscribe, (err, granted) => {
    if (err) {
      console.error('⚠️ [MQTT] Subscribe failed:', err.message || err);
      return;
    }
    console.log(`📩 [MQTT] Subscribed to: ${granted!.map((g) => g.topic).join(', ')}`);
  });
});

client.on('message', (topic, payload) => {
  const message = payload.toString();
  try {
    const data = JSON.parse(message);
    console.log(`📨 [MQTT] Received JSON of [${topic}]:`, data);
  } catch (error) {
    console.log(`📨 [MQTT] Received text of [${topic}]:`, message);
  }
});
