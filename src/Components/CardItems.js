import React from "react";
import { Link } from "react-router-dom";
function CardItems(props) {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={props.path}>
          <figure className="cards-item-pic-wrap" data-category={props.label}>
            <img
              className="cards-item-img"
              src={props.src}
              alt="Travel image"
            />
          </figure>
          <div className="cards-item-info">
            <h5 className="cards-item-text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItems;
