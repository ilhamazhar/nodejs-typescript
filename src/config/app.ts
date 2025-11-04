import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import router from '../router';
import '../sensor/pju.arus';

const app = express();

// 🧩 Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🚀 MQTT Routes
app.use('/mqtt', router);
app.get('/', (_, res) => res.send('✅ MQTT Server is Running'));

export default app;
