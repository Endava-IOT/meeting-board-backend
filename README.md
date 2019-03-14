# IoT MeetingBoard Backend

The implementation of a NodeJS - Typescript - application

- Javascript
- Typescript
- Express
- Google Calendar API

## Getting Started

For this application to work you need NodeJS, please use NVM!

### Prerequisites

You can run this application in any OS, it just need NodeJS and Typescript to start.

### Installing

Fist install NodeJS (version 10 or above), preferably use NVM, download then from here:

- [Windows](https://github.com/coreybutler/nvm-windows) - Download NVM for Windows

- [Linux](https://github.com/creationix/nvm) - Download NVM for Linux

After installing NVM, install node:

```
nvm install 10
```

Then install typescript and node support globally

```
npm install -g ts-node typescript nodemon

```

After that install all the dependencies

```
npm install
```

And finally you can run the application with

```
npm run dev
```

### Coding style

To develop this application we are using AirBnB Coding style (https://github.com/airbnb/javascript)

### Devops Stuff

We will use docker and docker compose to deploy our application, for this to work, first install docker (https://www.docker.com/products/docker-desktop)

And then docker compose: (https://docs.docker.com/compose/install/)

## Deployment

To deploy this application, we use docker to build or image:

```
docker image build -t meeting-board-backend
```

And run the image with

```
docker run -p 3000:3000 meeting-board-backend
```

## Built With

- [NodeJS](http://nodejs.org/) - As our main platform
- [Express](https://expressjs.com/) - Our route / api middleware to handle request
- [TypeScript](https://www.typescriptlang.org/) - A supercharged tool to use with Javascript
