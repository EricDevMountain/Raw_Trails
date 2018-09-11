import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Header from "./components/Header/Header";
import routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {routes}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
