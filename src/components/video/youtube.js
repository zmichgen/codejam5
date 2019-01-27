import React from "react";
import { render } from "react-dom";
import BigPicture from "react-bigpicture";
import data from "../../author.json";

export default class Youtube extends React.Component {
  render() {
    return (
      <div>
        {data.map((author, index) => {
          let videoId = author.ru.youtube
            .match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)
            .pop();
          let tumbnail = `https://img.youtube.com/vi/${videoId}/0.jpg`;

          return (
            <BigPicture
              type="youtube"
              caption="Example of an optional caption."
              src={author.ru.youtube}
            >
              <img src={tumbnail} alt="" />
            </BigPicture>
          );
        })}
      </div>
    );
  }
}
