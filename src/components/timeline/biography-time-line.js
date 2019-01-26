import React, { Component } from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import data from './author.json';
// import korot from './korotkevich.jpg'

const _ = require('lodash');

const name = "рыгор бородулин";
const lang = 'ru';
export default class BiographyTimeLine extends Component {
  findAuthor = (findName) => {
    return data.filter(e => _.find(e, { name: findName }))[0];  //findName = this.props.authorName
  }

  createTimeLineItem = () => _.keys(this.findAuthor(name)[lang].biography).map((e, i) => {
      return (<TimelineItem
                key={i}
                dateText={this.findAuthor(name)[lang].biography[e].dataTime}
                style={{ color: '#e86971' }}
       ><p>{this.findAuthor(name)[lang].biography[e].data}</p></TimelineItem>); // this.props.lang = lang, 
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