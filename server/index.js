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
const { getUser, strat, logout } = require(`${__dirname}/controllers/authCtrl`);
const {
  getReviews,
  postReview,
  putReview,
  deleteReview
} = require("./controllers/reviewCtrl");
const { postAnswers, getTrips } = require("./controllers/answersAndTripsCtrl");

let myPath = "";

const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
});

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

//app.use(checkForSession);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);

passport.serializeUser((user, done) => {
  const db = app.get("db");
  db.getUserByAuthId([user.id])
    .then(response => {
      if (!response[0]) {
        db.addUserByAuthId([
          user.name.givenName,
          user.name.familyName,
          user.emails[0].value,
          user.id
        ])
          .then(res => {
            return done(null, res[0]);
          })
          .catch(console.log);
      } else return done(null, response[0]);
    })
    .catch(console.log);
  // return done(null, user);
});

passport.deserializeUser((user, done) => done(null, user));

//AUTH DIFFERENT PATHS
app.post("/api/trackpath", (req, res) => {
  console.log(req.body.path);
  myPath = req.body.path;
  res.sendStatus(200);
});

//AUTH
app.get(
  "/login",
  passport.authenticate("auth0", {
    failureRedirect: "/login"
  }),
  (req, res) => {
    res.redirect(`http://localhost:3000/#${myPath}`);
  }
);

app.get("/api/me", getUser);
app.get("/api/logout", logout);

app.get("/api/plantrip", (req, res) => {
  if (req.user) res.status(200).json(req.user);
  else res.status(400).json({ message: "Not logged in" });
});

//REVIEW ENDPOINTS
app.get("/api/reviews", getReviews);
app.post("/api/review", postReview);
app.put("/api/review/:id", putReview);
app.delete("/api/review/:id", deleteReview);

//GET USER
app.get("/api/getuser", (req, res) => {
  res.status(200).json(req.user);
});

//ANSWERS TO BACKEND
app.post("/api/answers/:id", postAnswers);

//GET TRIPS
app.get("/api/trips", getTrips);

app.listen(port, () => {
  console.log(`Whistle Tippin on port ${port}`);
});

// app.get(‘/api/login’, passport.authenticate(‘auth0’, {failureRedirect: `http://localhost:3001/login`}), (req, res) => {
//    res.redirect(`http://localhost:3000/#${place}`)
// })
