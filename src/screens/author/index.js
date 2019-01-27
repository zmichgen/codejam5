import React, { Component } from 'react';
import './index.css';
import data from '../../codejam5.json';
import BiographyTimeLine from '../../components/timeline/biography-time-line';

export default class Author extends Component {
  getListingBooks = () => data[this.props.lang].autors[this.props.AuthorName].productList.map((e, i) => {
    return <li key={i}>{e}</li>
  })
  
  render() {
    console.log(this.props.props);
    return (
      <>
      <section className="about-author">
        <img 
          src={data[this.props.lang].autors[this.props.AuthorName].image}
          alt={data[this.props.lang].autors[this.props.AuthorName].name}
          width="200"
          height="200"
        />
        <p className="about-author-text">{data[this.props.lang].autors[this.props.AuthorName].about}</p>
      </section>
      <BiographyTimeLine lang={this.props.lang} autorName={this.props.AuthorName}/>
      <ul>
        {this.getListingBooks()}
      </ul>
      </>
    )
  }
}
