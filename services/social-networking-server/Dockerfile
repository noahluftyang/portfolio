# Build stage
FROM node:12 AS builder

RUN apt-get update \
  && apt-get install -y build-essential python

WORKDIR /app

RUN npm install -g @prisma/cli --unsafe-perm

COPY prisma/schema.prisma ./
COPY package*.json ./

RUN npm ci

COPY tsconfig*.json ./
COPY src ./src

RUN npm run build

# Running stage
FROM node:12

ENV NODE_ENV production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist

EXPOSE 8000
CMD ["npm", "run", "start"]
