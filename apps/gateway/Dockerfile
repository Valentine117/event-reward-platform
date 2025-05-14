FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/gateway/package.json apps/gateway/

RUN npm install --production --workspaces --filter "gateway"

COPY . .
RUN npm run build --workspace=apps/gateway

CMD ["node", "apps/gateway/dist/main.js"]