import React from "react";
import data from "../Help/data";

const Content = () => {
  return (
    <div className="bigContainer">
      {data.map((item) => {
        return (
          <div>
            <div className="container">
              <div className="img">
                <img src={item.src.large} alt="" />
              </div>
              <div className="info">
                <p>{item.photographer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
