FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package.json package-lock.json ./
COPY apps/auth/package.json apps/auth/

RUN npm install --production --workspaces --filter "auth"

COPY . .
RUN npm run build --workspace=apps/auth

CMD ["node", "apps/auth/dist/main.js"]