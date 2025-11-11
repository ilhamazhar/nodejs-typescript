import cors from 'cors';
import helmet from 'helmet';
import express from 'express';

import router from '../router';

const app = express();

// 🧩 Global Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🚀 Routes
app.use('/api', router);

export default app;
