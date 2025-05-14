FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/event/package.json apps/event/

RUN npm install --production --workspaces --filter "event"

COPY . .
RUN npm run build --workspace=apps/event

CMD ["node", "apps/event/dist/main.js"]