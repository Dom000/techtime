This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Starting with docker for development
1. DEV MODE only

Inside the the app folder (techtime_app), You will find the dockerfile.dev (dev dockerfile)  instructions,Please don't edit unless if needs be.

2. Inside the root folder you can find the yaml file where every instruction has been assembled on how docker should build our container images of the dockerfile.dev (dev dockerfile),Please don't edit unless if needs be.

3. Starting project in dev mode with docker use this command to spin it up as ports has been mapped to [http://localhost:3004](http://localhost:3004)

```bash
## start
docker-compose -f docker-compose.dev.yaml up

## stop

docker-compose -f docker-compose.dev.yaml down

```

## Starting with docker for production
1. PROD. MODE only

Inside the the app folder (techtime_app), You will find the dockerfile.prod (prod dockerfile)  instructions,Please don't edit unless if needs be.

2. Inside the root folder (tecttime) you can find the production yaml file (docker-compose.prod.yaml) where every instruction has been assembled on how docker should build our container images of the dockerfile.prod (production dockerfile),Please don't edit unless if needs be.

3. Starting project in production mode with docker use this command to spin it up as ports has been mapped to [http://localhost:3004](http://localhost:3004)

```bash
## start
docker-compose -f docker-compose.prod.yaml build 

## stop

docker-compose -f docker-compose.prod.yaml down

```


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
