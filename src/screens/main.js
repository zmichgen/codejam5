import React from 'react';
import Hero from '../components/hero/hero';

const Main = props => {
  return (
    <div>
      <Hero lang={props}/>
    </div>    
  );
}

export default Main;
