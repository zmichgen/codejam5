import React from "react";
import * as _ from "lodash";
import Data from "../../codejam5.json";
import "./hero.scss";

const randomKey = number => {
  return Math.floor(Math.random() * number);
};

const title = {
  ru: "ПИСАТЕЛЬ ДНЯ",
  by: "ПIСМЕННIК ДНЯ",
  en: "WRITER OF THE DAY"
};

const getDate = () => {
  const date = new Date();
  return _.join([date.getFullYear(), date.getMonth() + 1, date.getDate()], ":");
};

const getImage = async imageName => {
  const imgSrc = await import(/* webpackMode: "eager" */ `../../${imageName}.jpg`);
  return imgSrc.default;
};

const getKey = number => {
  let myHeroKey = JSON.parse(localStorage.getItem("myHeroKey"));
  if (!myHeroKey) {
    const key = randomKey(number);
    const date = getDate();
    myHeroKey = {
      key: key,
      date: date
    };
    localStorage.setItem("myHeroKey", JSON.stringify(myHeroKey));
    return key;
  } else {
    let { key, date } = myHeroKey;
    if (date === getDate()) {
      return key;
    } else {
      const newkey = randomKey(number);
      if (newkey === key) {
        key = key > 2 ? key - 1 : key + 1;
      } else {
        key = newkey;
      }
      const date = getDate();
      myHeroKey = {
        key: key,
        date: date
      };
      localStorage.setItem("myHeroKey", JSON.stringify(myHeroKey));
      return key;
    }
  }
};

class Hero extends React.Component {
  constructor(props) {
    super();
    this.lang = props.lang;
    const heroes = _.keys(Data[this.lang].autors);
    const key = getKey(heroes.length);
    this.hero = heroes[key];
    this.name = 'russia'
    this.data = _.values(Data[this.lang].autors)[key];
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
