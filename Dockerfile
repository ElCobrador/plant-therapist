# https://blog.devgenius.io/how-to-build-and-run-a-nodejs-app-with-docker-github-actions-59eb264dfef5
# https://nodejs.org/en/docs/guides/nodejs-docker-webapp
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080
ENTRYPOINT ["/bin/bash", "-c", "node -r ts-node/register -r tsconfig-paths/register dist/server.js"]