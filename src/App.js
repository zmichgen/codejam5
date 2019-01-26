import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Main = (props) => {
  const header = {
    ru: 'Главная',
    by: 'Галоуная',
    en: 'Main'
  }
  const { lang } = props;
  return () => {return <h1>{header[lang]}</h1>};
}
const Search = (props) => {
  const header = {
    ru: 'Поиск',
    by: 'Пошук',
    en: 'Search'
  }
  const { lang } = props;
  return () => {return <h1>{header[lang]}</h1>};
}

const Menu = {
  ru: {
    main:'Главная',
    search: 'Поиск',
    lang: 'Русский',
    brand: 'Белорусские писатели'
  },
  by: {
    main:'Галоуная',
    search: 'Пошук',
    lang: 'Беларуская',
    brand: 'Беларускія пісьменнікі'
  },
  en: {
    main:'Main',
    search: 'Search',
    lang: 'English',
    brand: 'Belarusian writers'
  }  
}

class App extends Component {

  state = {
    lang: 'ru'
  }

  switchLanguage = () => {
    let { lang } = this.state; 
    switch (lang) {
      case 'ru': {lang = 'by'; break;}
      case 'by': {lang = 'en'; break;}
      case 'en': {lang = 'ru'; break;}
      default: break;
    }
    this.setState({lang: lang});
  }

  render() {
    const {main, search, lang, brand} = Menu[this.state.lang];
    const mainPage = Main(this.state);
    const searchPage = Search(this.state);
    return (
      <Router basename="/codejam5" >
        <div className="wrapper">
          <nav className="navbar navbar-expand-md navbar-light bg-light"> 
            <p className="navbar-brand" >{brand}</p>        
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/home'} className="nav-link">{main}</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/search'} className="nav-link">{search}</Link>
                </li>
              </ul>
              <span>
                  <button  className="nav-link" onClick={this.switchLanguage}>{lang}</button>
              </span>                           
            </div>
          </nav>
          <Switch>
              <Route exact path='/' component={mainPage}/>
              <Route exact path='/home' component={mainPage}/>
              <Route exact path='/search' component={searchPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
