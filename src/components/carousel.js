import React from "react";
import Swiper from "react-id-swiper";

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrev = this.goPrev.bind(this);
    this.swiper = null;
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext();
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev();
  }

  render() {
    const params = {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: ".swiper-pagination"
      }
    };

    return (
      <div>
        <Swiper {...params}>
          <div>
            <img src="../img/melezsh/0.png" />;
          </div>
          <div>
            <img src="../src/img/melezsh/1.png" />;
          </div>
          <div>
            <img src="../src/img/melezsh/2.png" />;
          </div>
          <div>
            <img src="../src/img/melezsh/3.png" />;
          </div>
          <div>
            <img src="../src/img/melezsh/4.png" />;
          </div>
        </Swiper>
        <button onClick={this.goNext}>Next</button>
        <button onClick={this.goPrev}>Prev</button>
      </div>
    );
  }
}
