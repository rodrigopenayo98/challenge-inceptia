FROM node:8.10.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm install react-hot-loader
RUN npm install --loglevel verbose

COPY ./frontend ./frontend
COPY ./backend ./backend

EXPOSE 3000

CMD ["npm", "start"]
