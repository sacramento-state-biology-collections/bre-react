FROM node:latest

WORKDIR /app
COPY package.json /app

RUN npm install

COPY codux.config.json /app/codux.config.json
COPY tsconfig.json /app/tsconfig.json
EXPOSE 3000

CMD ["npm", "start"]
