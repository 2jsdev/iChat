FROM node:16.20.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

ENV NODE_ENV=production

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "run", "start" ]
