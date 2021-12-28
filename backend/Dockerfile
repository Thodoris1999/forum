FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 3680

CMD [ "npm", "run", "start" ]
