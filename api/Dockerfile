FROM node:alpine

ARG API_CONTEXT
ARG MONGO_URI

ENV API_CONTEXT=/api
ENV MONGO_URI=mongodb://mongo:27017/appdb

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./package-lock.json /app/package-lock.json
RUN npm ci

COPY . .

CMD ["node", "index.js"]