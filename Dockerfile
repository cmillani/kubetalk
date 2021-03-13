FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
RUN npm prune --production

EXPOSE 8081

CMD [ "npm", "start"]
