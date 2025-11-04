import 'dotenv/config';
import app from './config/app';

const port = process.env.APP_PORT || 6000;

async function startServer() {
  try {
    app.listen(port, () => {
      console.info(`✅ App running on port:${port}`);
    });
  } catch (error) {
    console.error('❌  Failed to start server:', error);
    process.exit(1);
  }
}

startServer().catch((err) => {
  console.error('❌  Unhandled error during startup:', err);
  process.exit(1);
});
