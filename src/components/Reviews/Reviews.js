import React, { Component } from "react";
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
      newReview: ""
    };
  }
  componentDidMount() {
    this.props.getReviews();
  }
  render() {
    let { newReview } = this.state;
    let reviewCard = this.props.reviews.map(e => {
      return (
        <div className="reviewCard" key={e.review_id}>
          <h3>{`${e.first_name} ${e.last_name}`}</h3>
          <h2>{e.review}</h2>
          <p>{e.comment_date}</p>
          <button className="deleteReview">DELETE</button>
          <button className="updateButton">UPDATE REVIEW</button>
          <br />
          <div>
            <h3>Respond</h3>
            <textarea />
          </div>
        </div>
      );
    });
    console.log(newReview);
    return (
      <div>
        <h1>Reviews</h1>
        {reviewCard}
        <div>
          <h3>Write a review</h3>
          <textarea
            className="newReview"
            onChange={e => this.setState({ newReview: e.target.value })}
          />
          <button className="submitButton" onClick={() => addReview(newReview)}>
            SUBMIT
          </button>
        </div>
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
