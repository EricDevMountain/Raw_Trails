import React, { Component } from "react";

import Reviews from "../Reviews/Reviews";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="home">HOME</h1>
        <Reviews />
      </div>
    );
  }
}

export default Home;
