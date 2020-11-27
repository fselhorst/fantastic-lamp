FROM node:alpine as build

ARG REACT_APP_API_CONTEXT=/api
ARG REACT_APP_OAUTH_DOMAIN=fsxh.eu.auth0.com
ARG REACT_APP_OAUTH_CLIENT_ID=Y1xPvsicGb3I1Rut6wiCZW1DUmO6TaIJ

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install --network-timeout 10000000

COPY . .

RUN yarn build


FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/build /usr/share/nginx/html