FROM node:alpine as build

ARG REACT_APP_API_CONTEXT=/api
ARG REACT_APP_OAUTH_DOMAIN=fsxh.eu.auth0.com
ARG REACT_APP_OAUTH_CLIENT_ID=Y1xPvsicGb3I1Rut6wiCZW1DUmO6TaIJ
ARG REACT_APP_API_HOST=http://localhost

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install --network-timeout 10000000

COPY . .

RUN yarn build


FROM nginx

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx-selfsigned.crt /etc/ssl/certs/nginx-selfsigned.crt
COPY ./nginx/nginx-selfsigned.key /etc/ssl/private/nginx-selfsigned.key
COPY ./nginx/dhparam.pem /etc/ssl/certs/dhparam.pem
COPY ./nginx/self-signed.conf /etc/nginx/snippets/self-signed.conf
COPY ./nginx/ssl-params.confg etc/nginx/snippets/ssl-params.conf

COPY --from=build /app/build /usr/share/nginx/html