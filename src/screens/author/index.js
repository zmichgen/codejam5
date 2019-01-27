import React, { Component } from 'react';
import './index.css';
import data from '../../data.json';
import BiographyTimeLine from '../../components/timeline/biography-time-line';

const name = "Иван Мележ"; //this.props.AuthorName
const lang = 'ru'; //this.props.lang
export default class Author extends Component {
  getListingBooks = () => data[this.props.lang].autors[this.props.AuthorName].productList.map((e, i) => {
    return <li key={i}>{e}</li>
  })
  
  render() {
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
      <BiographyTimeLine />
      <ul>
        {this.getListingBooks()}
      </ul>
      </>
    )
  }
}