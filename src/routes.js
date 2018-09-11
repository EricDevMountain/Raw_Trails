import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Insta from "./components/Insta/Insta";
import PlanTrip from "./components/PlanTrip/PlanTrip";
import QuizOne from "./components/Quiz/QuizOne/QuizOne";
import QuizTwo from "./components/Quiz/QuizTwo/Quiztwo";
import QuizThree from "./components/Quiz/QuizThree/QuizThree";
import Reviews from "./components/Reviews/Reviews";
import Header from "./components/Header/Header";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={About} exact path="/about" />
    <Route component={Insta} exact path="/insta" />
    <Route component={PlanTrip} exact path="/plantrip" />
    <Route component={QuizOne} exact path="/quizone" />
    <Route component={QuizTwo} exact path="/quiztwo" />
    <Route component={QuizThree} exact path="/quizthree" />
    <Route component={Reviews} exact path="/reviews" />
    <Route component={Header} exact path="/header" />
  </Switch>
);
