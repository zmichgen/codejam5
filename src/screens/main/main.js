import React from 'react';
import Hero from '../../components/hero/hero';
import InfoBlock from '../../components/about/about';
import './main.scss';

class Main extends React.Component {
  
  render() {
    return (
      <div>
        <div className="portal">
          <Hero lang={this.props.lang} authorName={this.props.authorName}/>
          <InfoBlock lang={this.props}/>
        </div>
          <div className="dreamTeam">  
        </div>
      </div>   
    );

  }
  
}

export default Main;
