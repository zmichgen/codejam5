import React, { Component } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import data from '../../data.json';
import './timeline.css';

const _ = require('lodash');

export default class BiographyTimeLine extends Component {
  findAuthor = findName => {
    return data[this.props.lang].autors[findName];
  };

  createTimeLineItem = () =>
    _.keys(this.findAuthor(this.props.autorName).biography).map((e, i) => {
      const dataTimeStyle = { background: '#4e362e' };
      if ((i + 2) % 2 === 0) {
        dataTimeStyle.background = '#f5cc5e';
      }
    return (<TimelineItem
      key={i}
      dateText={this.findAuthor(this.props.autorName).biography[e]["dataTime"]}
      style={{ color: "#F5CC5E" }}
      dateInnerStyle={dataTimeStyle}
    ><p>{this.findAuthor(this.props.autorName).biography[e].data}</p></TimelineItem>); 
  })
  render() {
    return (
      <>
        <Timeline lineColor={'#EDE8C9'}>
          {this.createTimeLineItem()}
        </Timeline>
      </>
    );
  }
}
