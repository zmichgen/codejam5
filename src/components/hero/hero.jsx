import React from 'react';
import * as _ from 'lodash';
import Data from '../../codejam5.json';

const Hero = (props) => {
  console.log(props);
  const heroes = _.keys(Data[props.lang].autors); 
  const hero = heroes[props.key];
  const data = _.values(Data[props.lang].autors)[props.key];
  return (
    <div>
      <h1>{hero}</h1>
      <p>{data.years}</p>
      <p>{data.description}</p>
    </div>
  );
} 

export default Hero;
