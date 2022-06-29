"use strict";

require("dotenv").config();
const PORT = process.env.PORT || 4040;
const server = require("./src/server");
const { sequelize } = require("./src/auth/models/index-models");

sequelize
    .sync()
    // start();
    .then(() => {
        server.start(PORT);
    })
    .catch(console.error);
