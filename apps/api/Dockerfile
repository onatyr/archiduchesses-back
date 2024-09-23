FROM node:16

WORKDIR /usr/src/app

# Copy root package.json and lockfile
COPY ./package.json ./
COPY ./package-lock.json ./

# Copy the api package.json
COPY package.json ./apps/api/package.json

RUN npm install

# Copy app source
COPY . .

EXPOSE 8080

CMD [ "node", "apps/api/server.js" ]