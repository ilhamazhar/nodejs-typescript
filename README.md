# Setup Project

Create .env file in the root directory of the project and add the following environment variables:

```
APP_PORT=number
DATABASE_URL=string
LOG_LEVEL=string
```

```shell
npm install
npx prisma migrate dev
npx prisma generate
npm run build
npm start
```