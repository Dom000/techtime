FROM node:17-alpine

WORKDIR /app

# COPY package.json .

COPY . .

RUN yarn install

EXPOSE 4000

CMD ["yarn", "run","dev"]
