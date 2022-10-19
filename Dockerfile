FROM node:18-alpine3.15
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN npm install

CMD [ "node", "index.js" ]
