# Build stage
FROM node:12-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY tsconfig.json ./
COPY src ./src

RUN yarn build

# Running stage
FROM node:12-alpine

ENV NODE_ENV production

COPY --from=builder /app/package.json /app/yarn.lock ./
COPY --from=builder /app/dist ./dist

RUN yarn --frozen-lockfile

EXPOSE 8000
CMD ["yarn", "start"]
