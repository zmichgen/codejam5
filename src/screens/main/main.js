import React from 'react';
import Hero from '../../components/hero/hero';
import InfoBlock from '../../components/about/about';
import './main.scss';

const Main = props => {
  return (
    <div>
      <div className="portal">
        <Hero lang={props}/>
        <InfoBlock lang={props}/>
      </div>
      <div className="dreamTeam">

      </div>
    </div>   
  );
}

export default Main;
