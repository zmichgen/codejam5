import React from "react";
import Data from "../../codejam5.json";
import "./hero.scss";

const getImage = async imageName => {
  const imgSrc = await import( `../../images/portraits/${imageName}.jpg`);
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
