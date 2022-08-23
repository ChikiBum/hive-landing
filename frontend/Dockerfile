# build app
FROM node:lts-buster AS build

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY public ./public
COPY .env ./

RUN yarn && yarn build

# run static server for app
FROM node:lts-buster AS run

WORKDIR /app

COPY --from=build /app/build ./build

RUN npm install --global --unsafe-perm serve

EXPOSE $PORT

CMD ["serve", "--no-clipboard", "--single", "build"]