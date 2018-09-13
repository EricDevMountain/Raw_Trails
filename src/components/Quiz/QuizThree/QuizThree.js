import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  setQuizThreeAnswer,
  postAnswersToBackend
} from "../../../redux/ducks/quizReducer";

import "./QuizThree.css";

class QuizThree extends Component {
  adrenalineToState = () => {
    this.props.setQuizThreeAnswer("adrenaline");
  };

  relaxToState = () => {
    this.props.setQuizThreeAnswer("relax");
  };

  answersHandler = () => {
    const { answerOne, answerTwo, answerThree } = this.props;
    this.props
      .postAnswersToBackend({ answerOne, answerTwo, answerThree })
      .then((window.location.href = "/#/plantrip"));
  };

  render() {
    return (
      <div>
        <h2 className="QuestionsTitle">
          Let's find an ideal vacation based on your preferences.
        </h2>
        <h3 className="QuestionsHeader">Would you prefer?</h3>

        <div className="questions">
          <div>
            <p className="question"> Adrenaline Rush </p>
            <button
              className="questionButton"
              onClick={() => this.adrenalineToState()}
            >
              SUBMIT
            </button>
          </div>

          <div>
            <p className="question"> Rest and Relax </p>
            <button
              className="questionButton"
              onClick={() => this.relaxToState()}
            >
              SUBMIT
            </button>
            <button onClick={() => this.answersHandler()}>
              See my Adventures
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { setQuizThreeAnswer, postAnswersToBackend }
)(QuizThree);
