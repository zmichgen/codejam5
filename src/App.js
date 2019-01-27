import React, { Component } from "react";
import Youtube from "./components/youtube";
import Carousel from "./components/carousel";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Youtube />
        <Carousel />
      </div>
    );
  }
}

export default App;
