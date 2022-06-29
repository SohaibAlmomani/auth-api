"use strict";

const express = require("express");
const secretRouters = express.Router();
const bearerAuth = require("../middlewares/bearer");

secretRouters.get("/secret", bearerAuth, (req, res) => {
  res.status(200).json({
    message: "You are authorized to view the user orders",
    user: req.user,
  });
});

module.exports = secretRouters;
