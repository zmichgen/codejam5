import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import data from '../../data.json';
// import korot from './korotkevich.jpg'

const _ = require('lodash');

const name = "рыгор бородулин";
const lang = 'ru';
export default class BiographyTimeLine extends Component {
  findAuthor = (findName) => {
    return data[lang].autors[findName]
  }

  createTimeLineItem = () => _.keys(this.findAuthor(name).biography).map((e, i) => {
    const dataTimeStyle = { background: '#4e362e' };
    if ((i + 2) % 2 === 0) {
      dataTimeStyle.background = '#f5cc5e';
    }

    return (<TimelineItem
      key={i}
      dateText={this.findAuthor(name).biography[e]["data-time"]}
      style={{ color: "#e86971" }}
      dateInnerStyle={dataTimeStyle}
    ><p>{this.findAuthor(name).biography[e].data}</p></TimelineItem>); // this.props.lang = lang, 
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