FROM node:16
WORKDIR /app
COPY package.json .
RUN npm config set strict-ssl false
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["node", "app.js"]