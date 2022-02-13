FROM node:14-alpine3.14

COPY ./package.json /src/

WORKDIR /src

RUN npm install

EXPOSE 8081

COPY . /src

CMD ["npm", "start"]