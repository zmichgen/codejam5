import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import data from '../../data.json';
import './gallery.css';
 
const nameProp = "Иван Мележ";

class Gallery extends Component {
  getImages() {
    const images = (data.autors[nameProp].gallery).map(item => {
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