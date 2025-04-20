FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm run build

CMD ["node","api/index.js"]
