FROM node:alpine

ARG API_CONTEXT=/api

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

COPY . .

CMD ["node", "index.js"]