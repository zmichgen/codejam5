import React from "react";
import Data from "../../codejam5.json";
import "./hero.scss";

const title = {
  ru: "ПИСАТЕЛЬ ДНЯ",
  by: "ПIСМЕННIК ДНЯ",
  en: "WRITER OF THE DAY"
};

const getImage = async imageName => {
  const imgSrc = await import(/* webpackMode: "eager" */ `../../images/portraits/${imageName}.jpg`);
  return imgSrc.default;
};

class Hero extends React.Component {
  constructor(props) {
    super();
    this.lang = props.lang;
    this.hero= props.authorName;  
    this.data = Data[this.lang].autors[props.authorName];
    this.name = this.data.image;
  }
  state = {
    portret: {}
  };

  componentDidMount = () => {
    getImage(this.name).then(data => {
      this.setState({
        portret: data
      });
    });
  };

  render() {
    const { portret } = this.state;
    return (
      <div className="hero">
        <h3>{title[this.lang]}</h3>
        <div>
          <img src={portret} alt="portret" />
        </div>
        <div>
          <h3>{this.hero}</h3>
          <p>{this.data.years}</p>
          <p>{this.data.description}</p>
        </div>
      </div>
    );
  }
}

export default Hero;
