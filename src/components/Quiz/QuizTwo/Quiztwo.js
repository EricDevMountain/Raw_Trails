import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { setQuizTwoAnswer } from "../../../redux/ducks/quizReducer";

import "./QuizTwo.css";
class QuizTwo extends Component {
  motorToState = () => {
    this.props.setQuizTwoAnswer("motor");
  };

  muscleToState = () => {
    this.props.setQuizTwoAnswer("muscle");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2 className="QuestionsTitle">
          Let's find an ideal vacation based on your preferences.
        </h2>
        <h3 className="QuestionsHeader">Would you prefer?</h3>

        <div className="questions">
          <div>
            <p className="question"> Get around on something motorized</p>
            <Link to="/quizthree">
              <button
                className="questionButton"
                onClick={() => this.motorToState()}
              >
                SUBMIT
              </button>
            </Link>
          </div>

          <div>
            <p className="question"> Get around by using my own muscle </p>
            <Link to="/quizthree">
              <button
                className="questionButton"
                onClick={() => this.muscleToState()}
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
    answerOne: state.quizReducer.answerOne,
    answerTwo: state.quizReducer.answerTwo
  };
};

export default connect(
  mapStateToProps,
  { setQuizTwoAnswer }
)(QuizTwo);
