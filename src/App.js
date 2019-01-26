import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Main = () => {return <h1>Main</h1>}
const Search = () => {return <h1>Search</h1>}

class App extends Component {
  render() {
    return (
    <Router>
        <div >
        <nav className="navbar navbar-expand-md navbar-light bg-light">           
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Главная</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/search'} className="nav-link">Авторы</Link>
                </li>
              </ul>              
              <span className="navbar-text">

              </span>
        </div>
          </nav>
          <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/search' component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
