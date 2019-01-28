import React, { Component } from 'react';
import './index.css';
import data from '../../data.json';
import BiographyTimeLine from '../../components/timeline/biography-time-line';
import Gallery from '../../components/gallery/gallery';
import YandexMap from '../../components/map/YandexMap';
import Youtube from '../../components/video/youtube';

export default class Author extends Component {
  getListingBooks = () =>
    data[this.props.lang].autors[this.props.authorName].productList.map(
      (e, i) => {
        return <li key={i}>{e}</li>;
      }
    );

  render() {
    return (
      <>
        <section className="about-author">
          <img
            src={
              process.env.PUBLIC_URL +
              data[this.props.lang].autors[this.props.authorName].image
            }
            alt={data[this.props.lang].autors[this.props.authorName].name}
            width="200"
            height="200"
          />
          <p className="about-author-text">
            {data[this.props.lang].autors[this.props.authorName].about}
          </p>
        </section>
        <BiographyTimeLine
          lang={this.props.lang}
          autorName={this.props.authorName}
        />
        <ul>{this.getListingBooks()}</ul>
        <Gallery lang={this.props.lang} autorName={this.props.authorName} />
        <Youtube lang={this.props.lang} autorName={this.props.authorName} />
        <YandexMap lang={this.props.lang} autorName={this.props.authorName} />
      </>
    );
  }
}
