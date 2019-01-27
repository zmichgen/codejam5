import React from "react";
import * as _ from "lodash";
import Data from "../../codejam5.json";

const Hero = props => {
  const {lang} = props;
  const heroes = _.keys(Data[lang].autors);
  const hero = heroes[2];
  const data = _.values(Data[lang].autors)[2];
  return (
    <div>
      <h1>{hero}</h1>
      <p>{data.years}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default Hero;
