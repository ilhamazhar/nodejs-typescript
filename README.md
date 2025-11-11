# Setup Project

Create .env file in the root directory of the project and add the following environment variables:

```
APP_PORT=number
DATABASE_URL=string
LOG_LEVEL=string
```

```shell
pnpm install
npx prisma migrate dev
npx prisma generate
pnpm build
pnpm start
```

```shell
pm2 start dist/main.js --name social-media-be-3011
```