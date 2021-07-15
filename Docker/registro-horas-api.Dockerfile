FROM node:14

WORKDIR /usr/src/app
COPY registro-horas-api/package*.json ./
RUN npm install
COPY registro-horas-api/* .

CMD [ "npm", "start" ]
