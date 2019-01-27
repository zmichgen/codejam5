import React, { Component } from "react";
import * as _ from "lodash";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./codejam5.json";
import English from "./england.jpg";
import Russian from "./russia.jpg";
import Belarus from "./belarus.jpg";
import MainPage from "./views/main";

const Search = props => {
  const header = _.keys(Data[props].autors)[1];
  return () => {
    return <h1>{header}</h1>;
  };
};
const Main = props => {
  return () => {
    return MainPage(props);
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "ru"
    };
  }

  switchLanguage = e => {
    const lang = e.target.id;
    if (lang) {
      this.setState({ lang: lang });
    }
  };

  render() {
    const menuItems = _.values(Data[this.state.lang].interface.mainMenu);
    const mainPage = Main(this.state.lang);
    const searchPage = Search(this.state.lang);
    return (
      <Router basename="/codejam5">
        <div className="wrapper">
          <nav className="navbar navbar-expand-md navbar-light bg-light">
            <p className="navbar-brand">{menuItems[2]}</p>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    {menuItems[0]}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/search"} className="nav-link">
                    {menuItems[1]}
                  </Link>
                </li>
              </ul>
              <div className="switchLang" onClick={this.switchLanguage}>
                <button>
                  <img id="ru" width="30" src={Russian} alt="russian" />
                </button>
                <button>
                  <img id="by" width="30" src={Belarus} alt="russian" />
                </button>
                <button>
                  <img id="en" width="30" src={English} alt="russian" />
                </button>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={mainPage} />
            <Route exact path="/home" component={mainPage} />
            <Route exact path="/search" component={searchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
