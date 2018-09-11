require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const massive = require("massive");
const port = process.env.SERVER_PORT || 3005;

//CONTROLLERS
const {
  getReviews,
  postReview,
  putReview,
  deleteReview
} = require("./controllers/reviewController");
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);

const app = express();

app.use(json());
app.use(cors());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 2 * 7 * 24 * 60 * 60 * 1000
    }
  })
);

app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

//AUTH
app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "/api/quizone",
    failureRedirect: "/login"
  })
);

app.get("/api/quizone", (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(400).json({ message: "Not logged in" });
});

//REVIEW ENDPOINTS
app.get("/api/reviews", getReviews);
app.post("/api/review", postReview);
app.put("/api/review/:id", putReview);
app.delete("/api/review/:id", deleteReview);

app.listen(port, () => {
  console.log(`Whistle Tippin on port ${port}`);
});
