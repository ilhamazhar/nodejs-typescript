import { PrismaClient, Prisma } from '@prisma/client';

import { logger } from './logger';

export const prismaClient = new PrismaClient({
  log: [
    { emit: 'event', level: 'info' },
    { emit: 'event', level: 'query' },
    { emit: 'event', level: 'warn' },
    { emit: 'event', level: 'error' },
  ],
  errorFormat: 'pretty',
});

prismaClient.$on('info', (e: Prisma.LogEvent) => {
  logger.info(e.message);
});

prismaClient.$on('query', (e: Prisma.QueryEvent) => {
  logger.info(`Query: ${e.query} | Duration: ${e.duration}ms`);
});

prismaClient.$on('warn', (e: Prisma.LogEvent) => {
  logger.warn(e.message);
});

prismaClient.$on('error', (e: Prisma.LogEvent) => {
  logger.error(e.message);
});

// Connection management
export async function connectDatabase(retries = 5, delay = 5000): Promise<void> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await prismaClient.$connect();
      logger.info('✅ Database connected successfully');

      // Test with a simple query
      await prismaClient.$queryRaw`SELECT 1`;
      logger.info('✅ Database query test passed');

      return;
    } catch (error) {
      logger.error(`❌ Database connection attempt ${attempt}/${retries} failed`);

      if (error instanceof Prisma.PrismaClientInitializationError) {
        logger.error(`Initialization error: ${error.message}`);
        logger.error(`Error code: ${error.errorCode}`);
      } else if (error instanceof Prisma.PrismaClientKnownRequestError) {
        logger.error(`Known error [${error.code}]: ${error.message}`);
      } else if (error instanceof Error) {
        logger.error(error.message);
      }

      if (attempt < retries) {
        logger.info(`⏳ Retrying in ${delay / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        logger.error('💀  Failed to connect to database after all attempts');
        throw new Error('Database connection failed');
      }
    }
  }
}

// Graceful disconnect
export async function disconnectDatabase(): Promise<void> {
  try {
    await prismaClient.$disconnect();
    logger.info('✅ Database disconnected gracefully');
  } catch (error) {
    logger.error(`❌ Error disconnecting from database: ${error}`);
  }
}
