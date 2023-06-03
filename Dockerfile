FROM node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g jest

COPY . .

CMD ["npm", "test"]