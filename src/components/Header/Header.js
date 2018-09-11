import React, { Component } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" />
        <button className="menuButton">MENU</button>
        <div className="links">
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/quizone">
            QUIZ
          </Link>
          <Link className="link" to="/about">
            ABOUT
          </Link>
          <Link className="link" to="/about">
            QUESTIONS
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
