FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

# Copy app source
COPY . .

EXPOSE 3000
CMD ["node", "app.js"]
