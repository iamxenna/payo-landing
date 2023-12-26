FROM node:latest

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm i -g next

RUN yarn install

COPY . /usr/src/app

RUN yarn build

CMD ["yarn", "start", "-p", "3010"]

