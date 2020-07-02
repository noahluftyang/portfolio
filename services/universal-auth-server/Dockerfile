# Build stage
FROM node:12-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN yarn

COPY tsconfig.json ./
COPY src ./src

RUN yarn build

# Running stage
FROM node:12-alpine

ENV NODE_ENV production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/dist ./dist

RUN yarn

EXPOSE 8000
CMD ["yarn", "start"]
