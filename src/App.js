import React, { Component } from "react";
import * as _ from "lodash";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Data from "./data.json";
import English from "./england.jpg";
import Russian from "./russia.jpg";
import Belarus from "./belarus.jpg";
import MainPage from "./screens/main/main";
import AutorPage from "./screens/author/index";
import SearchList from "./screens/search/search-list";

const Search = (props, fun) => {
  return () => {
    return (
      <SearchList lang={props.lang} newName={props.name} selectAuthor={fun} />
    );
  };
};

const Autor = props => {
  return () => {
    return (
      <AutorPage
        lang={props.lang}
        authorName={props.name}
      />
    );
  };
};

const Main = props => {
  return () => {
    return <MainPage lang={props.lang} authorName={props.AuthorName} />;
  };
};

const randomIndex = number => {
  const date = new Date();
  const day = date.getDay() + 1;
  return day % number;
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "ru",
      newName: localStorage.getItem("name")
    };
  }

  switchLanguage = e => {
    const lang = e.target.id;
    if (lang) {
      this.setState({ lang: lang });
    }
  };

  changeAuthorName = name => {
    this.setState({ newName: name });
  };

  render() {
    const menuItems = _.values(Data[this.state.lang].interface.mainMenu);
    const authors = _.keys(Data[this.state.lang].autors);
    const authorName = authors[randomIndex(authors.length)];
    const props = {
      lang: this.state.lang,
      AuthorName: authorName,
      name: this.state.newName
    };
    const searchPage = Search(props, this.changeAuthorName);
    const autorPage = Autor(props);
    const mainPage = Main(props);
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
                <img id="ru" width="30" src={Russian} alt="russian" />
                <img id="by" width="30" src={Belarus} alt="belorussian" />
                <img id="en" width="30" src={English} alt="english" />
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={mainPage} />
            <Route exact path="/home" component={mainPage} />
            <Route exact path="/search" component={searchPage} />
            <Route exact path="/autor" component={autorPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
