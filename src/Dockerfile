FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=9001

EXPOSE 9001

CMD ["npm", "start"]