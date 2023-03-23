FROM node:17-alpine

WORKDIR /app


COPY . .

COPY package.json .

RUN yarn install

EXPOSE 4000

CMD ["yarn", "run","dev"]
