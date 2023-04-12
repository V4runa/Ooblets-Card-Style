import React from "react";
import Icon from "./Icon";

export default function Card(props) {
  return (
    <div className="outerBorder">
      <div className="innerBorder">
        <Icon id="0" />
        <div className="content">
          <img
            className="avatar"
            src="https://picsum.photos/250/250"
            alt="Avatar"
          />
          <div className="cardName">
            <h1>{props.title}</h1>
          </div>
          <div className="description">
            <h2>
              Add <span className="number">1 </span>fluster to your team, earn{" "}
              <span className="number">4 </span>points.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
