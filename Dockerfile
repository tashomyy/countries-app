FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

ENV NODE_ENV production

CMD ["npm", "run", "start:prod"]
