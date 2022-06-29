"use strict";

const express = require("express");
const app = express();
app.use(express.json());

const notFoundError = require("./error-handlers/404");
const internalError = require("./error-handlers/500");

const signupRouters = require("./auth/routers/signup");
const signInRouters = require("./auth/routers/signin");

const secretRouters = require("./auth/routers/secret");
const getUsersRouters = require("./auth/routers/getusers");

const v1Router = require("./auth/routers/v1");
const v2Router = require("./auth/routers/v2");

app.get('/', (req, res) => {
  res.status(200).send('The server is working successfully :) (; ');
});


app.use(signupRouters);
app.use(signInRouters);
app.use(secretRouters);
app.use(getUsersRouters);
app.use(v1Router);
app.use(v2Router);

app.use("*", notFoundError);
app.use(internalError);

const start = (PORT) => {
  app.listen(PORT, () => {
    console.log(`I am Listening and Running on port ${PORT}`);
  });
};

module.exports = {
  app: app,
  start: start,
};
