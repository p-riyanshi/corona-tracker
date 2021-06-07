import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div
        className="card__main"
        style={{
          backgroundColor: props.colorV,
        }}
      >
        <p className="card__tag">
          <span className="card__info">{props.info}</span> {props.tag}
        </p>

        <h2 className="card__value">{props.value}</h2>
      </div>
    </>
  );
};

export default Card;
