# Running stage
FROM node:12-alpine

ENV NODE_ENV production

WORKDIR /app

RUN npm install -g @prisma/cli --unsafe-perm

COPY prisma/schema.prisma ./
COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 8000
CMD node server.js
