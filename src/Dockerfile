FROM node:alpine

WORKDIR /typingwebsite

COPY package.json /typingwebsite/

RUN npm install

COPY . /typingwebsite/

CMD ["npm", "start"]


