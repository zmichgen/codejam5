import React from "react";
import BigPicture from "react-bigpicture";
import data from "../../data.json";
import "./index.css";

export default class Youtube extends React.Component {
  render() {
    const videoId = data[this.props.lang].autors[this.props.autorName].youtube
      .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
      .pop();
    const tumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    return (
      <div className='youtube-video'>
        <BigPicture
          type="youtube"
          caption="Example of an optional caption."
          src={data[this.props.lang].autors[this.props.autorName].youtube}
        >
          <img src={tumbnail} alt="" />
        </BigPicture>
      </div>
    );
  }
}
