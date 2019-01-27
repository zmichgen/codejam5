import React from "react";
import { render } from "react-dom";
import BigPicture from "react-bigpicture";
import data from "../author.json";

export default class Youtube extends React.Component {
  render() {
    return (
      <div>
        {data.map((author, index) => {
          return (
            <BigPicture
              type="youtube"
              caption="Example of an optional caption."
              src={author.ru.youtube}
            >
              <img src="http://img.youtube.com/vi//2.jpg" />
            </BigPicture>
          );
        })}
      </div>
    );
  }
}
