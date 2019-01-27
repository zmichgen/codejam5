import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import data from '../../codejam5.json';

const _ = require('lodash');

export default class BiographyTimeLine extends Component {
  findAuthor = (findName) => {
    console.log(this.props);
    return data[this.props.lang].autors[findName]
  }

  createTimeLineItem = () => _.keys(this.findAuthor(this.props.autorName).biography).map((e, i) => {
    const dataTimeStyle = { background: '#4e362e' };
    if ((i + 2) % 2 === 0) {
      dataTimeStyle.background = '#f5cc5e';
    }

    return (<TimelineItem
      key={i}
      dateText={this.findAuthor(this.props.autorName).biography[e]["data-time"]}
      style={{ color: "#e86971" }}
      dateInnerStyle={dataTimeStyle}
    ><p>{this.findAuthor(this.props.autorName).biography[e].data}</p></TimelineItem>); 
  })

  render() {
    return (
      <>
        <Timeline lineColor={'#ddd'}>
          {this.createTimeLineItem()}
        </Timeline>
      </>
    )
  }
}
