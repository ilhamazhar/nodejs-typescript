import type { Request, Response } from 'express';
import express from 'express';

import client from '../config/mqtt';

const router = express.Router();

router.post('/publish', (req: Request, res: Response) => {
  const { topic, message } = req.body;
  console.log('🚀 [MQTT] Publish request received:', { topic, message });

  if (!topic || !message) {
    return res.status(400).json({ error: 'Topic and message are required' });
  }

  if (!client.connected) {
    return res.status(503).json({ error: 'MQTT not connected' });
  }

  const payload = typeof message === 'object' ? JSON.stringify(message) : message;

  try {
    client.publish(topic, payload, (err) => {
      if (err) {
        console.error('❌ [MQTT] Publish failed:', err.message);
        return res.status(500).json({ error: 'MQTT Publish failed' });
      }
      console.log(`📤 [MQTT] Published: ${topic} -> ${payload}`);
      res.json({ success: true, topic, message });
    });
  } catch (error: any) {
    console.error('💥 [MQTT] Unexpected error:', error.message);
    res.status(500).json({ error: 'Internal MQTT error' });
  }
});

export default router;
