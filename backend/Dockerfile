FROM node:alpine

RUN mkdir -p /usr/src

WORKDIR /usr/src

COPY . /usr/src

RUN npm install

ENV NODE_ENV='production'

RUN npm run build

EXPOSE 3001

CMD npm run start
