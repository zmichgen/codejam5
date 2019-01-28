import React from 'react';
import Hero from '../../components/hero/hero';
import InfoBlock from '../../components/about/about';
import Team from '../../components/team/team';
import './main.scss';

class Main extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="portal">
          <Hero lang={this.props.lang} authorName={this.props.authorName}/>
          <InfoBlock lang={this.props}/>
        </div>
          <div className="dreamTeam">
          <Team lang={this.props.lang}/> 
        </div>
      </div>   
    );

  }
  
}

export default Main;
