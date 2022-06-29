"use strict";

const { users } = require("../models/users-model");
const base64 = require("base-64");

async function basicAuth(req, res, next) {
  if (req.headers.authorization) {

    let basicHeaderParts = req.headers.authorization.split(" "); // ['Basic', 'sdkjdsljd=']
    let encodedString = basicHeaderParts.pop(); // sdkjdsljd=
    let decodedString = base64.decode(encodedString); // "username:password"
    let [username, password] = decodedString.split(":"); // username, password

    users
      .authenticateBasic(username, password)
      .then((validUser) => {
        req.user = validUser;
        next();
      })
      .catch((err) => {
        res.status(403);
        res.send("Invalid SignIn");
      });

  }
}

module.exports = basicAuth;
