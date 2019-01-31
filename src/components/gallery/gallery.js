import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import data from "../../data.json";
import "./gallery.css";

class Gallery extends Component {
  getImages() {
    const images = data[this.props.lang].autors[
      this.props.autorName
    ].gallery.map(item => {
      return {
        original: process.env.PUBLIC_URL + item
      };
    });
    return images;
  }

  render() {
    const images = this.getImages();
    return (
      <ImageGallery
        items={images}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
      />
    );
  }
}

export default Gallery;
