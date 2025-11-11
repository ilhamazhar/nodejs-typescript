import 'dotenv/config';
import app from './config/app';
import { logger } from './config/logger';

const port = process.env.APP_PORT || 6000;

async function startServer() {
  try {
    app.listen(port, () => {
      logger.info(`✅ App running on port:${port}`);
    });
  } catch (error) {
    logger.error('❌  Failed to start server:', error);
    process.exit(1);
  }
}

startServer().catch((err) => {
  logger.error('❌  Unhandled error during startup:', err);
  process.exit(1);
});
