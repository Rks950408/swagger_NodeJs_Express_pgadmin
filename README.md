# Simple NodeJS API Server create documentation 

In this example application, we use Swagger JSDoc and Swagger UI Express to automatically generate OpenAPI documentation. We create a simple NodeJS API server to demonstrate the power of autogenerated documentation.
Step 1:
# npm install swagger-ui-express @types/swagger-ui-express swagger-jsdoc
Step 2:Folder structure
── src
│   ├── controllers
│   │   └── UserController.ts
│   ├── routes
│   │   └── userRoutes.ts
│   ├── daos
│   └── UserDao.ts
│   ├── docs
│   │   └── swagger.ts
│   ├── prisma
│   │   └── schema.prisma
│   ├── seeder
│   │   └── dataSeeder.ts
│   └── server.ts
├── package.json
├── tsconfig.json
└── .env
## Tutorial Available

## Running the Server

With [NodeJS](https://nodejs.org/en/) installed, you can started the server by running,

```sh
node app.js
```

_**OR**_

```start frontend
cd frontend
cd my-app
npm start
```
```start Backend
cd backend
npm run dev
```

## Accessing the Docs

With your local server running, the generated docs are available here: [http://localhost:5002/api-docs](http://localhost:5002/api-docs)

## Development

This simple server can be easily extended. After cloning this [repository](https://github.com/brian-childress/node-autogenerate-swagger-documentation) you can start developing locally.

### Locally (without Docker)

1) Install [Nodemon](https://www.npmjs.com/package/nodemon), Nodemon will watch for file changes and restart the NodeJS process. This allows for faster development and testing.

```sh
npm install -g nodemon
```

2) With Nodemon installed, start the server using Nodemon

```sh
nodemon app.js
```

_**OR**_

```sh
npm run start:dev
```
```sh
npm run start:dev
```

To stop your running NodeJS API server

```sh
ctrl + c
```

To quit your Docker Container development environment, in your terminal:

```sh
exit
```

This will cleanup any running containers, (note: the Docker image will still exist on your machine)