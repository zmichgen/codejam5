import React from "react";
import Data from "../../data.json";
import "./hero.scss";

class Hero extends React.Component {
  constructor(props) {
    super();
    this.lang = props.lang;
    this.hero = props.authorName;
    this.data = Data[this.lang].autors[props.authorName];
    this.name = this.data.image;
    console.log(this.name);
  }
//use common 
  render() {
    return (
      <div className="hero">
        <div>
          <img src={process.env.PUBLIC_URL + this.name} alt="portret" />
        </div>
        <div className="title">
          <h3>{this.hero}</h3>
          <p>{this.data.years}</p>
          <p>{this.data.description}</p>
        </div>
      </div>
    );
  }
}

export default Hero;
