# Build stage
FROM node:12 AS builder

RUN apt-get update \
  && apt-get install -y build-essential python

WORKDIR /app

ARG DATABAER_URI
ENV DATABASE_URI "$DATABASE_URI"

RUN npm install -g @prisma/cli --unsafe-perm

COPY prisma/schema.prisma ./
COPY package*.json ./

RUN npm install
RUN npx prisma generate

COPY tsconfig*.json ./
COPY src ./src

RUN npm run build

# Running stage
FROM node:12-alpine

ENV NODE_ENV production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

# RUN npm install --production

EXPOSE 8000
CMD ["npm", "run","start"]
