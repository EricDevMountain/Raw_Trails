require("dotnev").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");

const port = process.env.SERVER_PORT || 3005;

const app = express();

//CONTROLLERS

app.use(json());
app.use(cors());

app.listen(port, () => {
  console.log(`Whistle Tip on port ${port}`);
});
