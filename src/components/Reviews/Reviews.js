import React, { Component } from "react";
import axios from "axios";
import {
  getReviews,
  addReview,
  updateReview,
  deleteReview
} from "../../redux/ducks/reviewReducer";
import { connect } from "react-redux";
import "./Reviews.css";

class Reviews extends Component {
  constructor() {
    super();
    this.state = {
      newReview: "",
      user: [],
      updateBoolean: false,
      userUpdateReview: "",
      updateIndex: null
    };
  }
  componentDidMount() {
    this.props.getReviews();
    axios.get("/api/getuser").then(response => {
      this.setState({ user: response.data });
    });
  }

  authPath = () => {
    axios
      .post("/api/trackpath", { path: "/" })
      .then((window.location.href = "http://localhost:3005/login"));
  };

  updateFunction = (reviewId, rv) => {
    this.props.updateReview(reviewId, rv);
    this.setState({
      updateBoolean: false,
      userUpdateReview: "",
      updateIndex: null
    });
  };

  render() {
    let { newReview, user, userUpdateReview, updateBoolean } = this.state;

    let reviewCard = this.props.reviews.map((element, index) => {
      return (
        <div className="reviewCard" key={element.review_id}>
          <h3>{`${element.first_name} ${element.last_name}`}</h3>
          <h2>{element.review}</h2>
          <p>{element.comment_date}</p>
          {element.user_id === user.id ? (
            <div>
              <button
                className="deleteReview"
                onClick={() => this.props.deleteReview(element.review_id)}
              >
                DELETE
              </button>
              <button
                className="updateButton"
                onClick={() =>
                  this.setState({
                    updateBoolean: !updateBoolean,
                    updateIndex: index
                  })
                }
              >
                UPDATE REVIEW
              </button>
            </div>
          ) : (
            <div />
          )}
          <br />
          <div>
            {this.state.updateBoolean && index === this.state.updateIndex ? (
              <div>
                <textarea
                  onChange={e =>
                    this.setState({ userUpdateReview: e.target.value })
                  }
                />
                <button
                  onClick={() =>
                    this.updateFunction(element.review_id, userUpdateReview)
                  }
                >
                  SUBMIT
                </button>
              </div>
            ) : (
              <div />
            )}
          </div>
        </div>
      );
    });
    let addNewReview = (
      <div>
        <h3>Write a review</h3>
        <textarea
          value={newReview}
          className="newReview"
          onChange={e => this.setState({ newReview: e.target.value })}
        />
        <button
          className="submitButton"
          onClick={() => this.props.addReview(newReview)}
        >
          SUBMIT
        </button>
      </div>
    );
    let needToLogin = (
      <div>
        <div className="loginToReview">Login To write a review</div>
        <button
          onClick={() => {
            this.authPath();
          }}
        >
          LOGIN
        </button>
      </div>
    );
    let reviewSection = user.id ? addNewReview : needToLogin;
    return (
      <div>
        <h1>Reviews</h1>
        {reviewCard}
        {reviewSection}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    reviews: state.reviewReducer.reviews
  };
};

export default connect(
  mapStateToProps,
  { getReviews, addReview, updateReview, deleteReview }
)(Reviews);
