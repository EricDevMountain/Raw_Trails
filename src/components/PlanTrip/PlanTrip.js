import React, { Component } from "react";
import { logout } from "../../redux/ducks/authReducer";
import axios from "axios";

import "./PlanTrip.css";
import { connect } from "react-redux";
class PlanTrip extends Component {
  componentDidMount() {
    axios.get("/api/checkUser");
  }
  authPath = () => {
    axios
      .post("/api/trackpath", { path: "/plantrip" })
      .then((window.location.href = "http://localhost:3005/login"));
  };
  render() {
    return (
      <div>
        <h1>PlanTrip</h1>
        <button onClick={() => this.props.logout()}>LOGOUT</button>
        <button
          onClick={() => {
            this.authPath();
          }}
        >
          LOGIN TO PLAN YOUR TRIP
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(PlanTrip);
