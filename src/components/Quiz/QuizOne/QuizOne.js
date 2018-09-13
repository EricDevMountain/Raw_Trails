import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizOneAnswer } from "../../../redux/ducks/quizReducer";

import "./QuizOne.css";

class QuizOne extends Component {
  landToState = () => {
    this.props.setQuizOneAnswer("land");
  };

  waterToState = () => {
    this.props.setQuizOneAnswer("water");
  };

  render() {
    console.log(this.props.answerOne);
    return (
      <div>
        <h2 className="QuestionsTitle">
          Let's find an ideal vacation based on your preferences.
        </h2>
        <h3 className="QuestionsHeader">Would you prefer?</h3>

        <div className="questions">
          <div>
            <p className="question"> Adventuring on land </p>
            <Link to="/quiztwo">
              <button
                className="questionButton"
                onClick={() => this.landToState()}
              >
                SUBMIT
              </button>
            </Link>
          </div>

          <div>
            <p className="question"> Adventuring in the water </p>
            <Link to="/quiztwo">
              <button
                className="questionButton"
                onClick={() => this.waterToState()}
              >
                SUBMIT
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answerOne: state.quizReducer.answerOne
  };
};

export default connect(
  mapStateToProps,
  { setQuizOneAnswer }
)(QuizOne);
