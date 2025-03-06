# FROM node:18
FROM --platform=linux/arm64 node:18-slim AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production

RUN npm install

COPY . .

RUN npm run build

FROM --platform=linux/arm64 node:18-slim
WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

CMD ["node", "dist/api/index.js"]