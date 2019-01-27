import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../data.json';
import './gallery.css';
 
const name = "Иван Мележ";
const lang = "ru";

class Gallery extends Component {
  getImages() {
    const images = (data[0][lang].gallery).map(item => {
      return {
        original: item, 
        thumbnail: item,
      }
    });
    return images;
  }
 
  render() { 
    const images = this.getImages();
    return (
      <ImageGallery items={images} />
    );
  }
}

export default Gallery;