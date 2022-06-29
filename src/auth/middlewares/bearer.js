"use strict";
const { users } = require("../models/users-model");

module.exports = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      next("Invalid signin");
    }
    const bearerToken = req.headers.authorization.split(" ").pop();
    const validUser = await users.authenticateBearer(bearerToken);
    req.user = validUser;
    req.token = validUser.token;
    next();
  } catch (e) {
    console.error(e);
    res.status(403).send("Invalid signin");
  }
};
