FROM node:alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE $REACT_DOCKER_PORT

CMD [ "npm", "run", "start" ]
