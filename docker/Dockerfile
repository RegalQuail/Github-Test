FROM node:12

WORKDIR C:\\Programming\\Github\\Github-Test\\docker

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]

