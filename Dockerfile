FROM node:22.20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml* ./

RUN pnpm install

COPY prisma ./prisma/
RUN pnpm prisma generate

COPY . .

RUN pnpm build

FROM node:22.20-alpine AS runner

WORKDIR /app

RUN npm install -g pnpm && apk add --no-cache netcat-openbsd

COPY package*.json ./
COPY pnpm-lock.yaml* ./

RUN pnpm install --prod

COPY --from=builder /app/prisma ./prisma/

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3000

RUN echo '#!/bin/sh' > /entrypoint.sh && \
    echo 'set -e' >> /entrypoint.sh && \
    echo 'echo "🚀 Starting application..."' >> /entrypoint.sh && \
    echo 'echo "🔄 Running Prisma migrations..."' >> /entrypoint.sh && \
    echo 'pnpm prisma migrate deploy 2>/dev/null || pnpm prisma db push --skip-generate --accept-data-loss' >> /entrypoint.sh && \
    echo 'echo "✅ Migrations complete!"' >> /entrypoint.sh && \
    echo 'exec "$@"' >> /entrypoint.sh && \
    chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["node", "dist/main.js"]
