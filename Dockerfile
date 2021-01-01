FROM node:alpine3.11

RUN apk update  &&  apk add yarn

COPY ./ /app
WORKDIR /app

RUN yarn install --production && rm -rf coverage mochawesome-report .nyc_output src tests

CMD [ "npm", "run", "start" ]