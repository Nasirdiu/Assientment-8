import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Dog.css";
const Dog = ({ handeler, product }) => {
  const { name, price, img } = product;

  return (
    <div className="dog-container">
      <img src={img} alt="" />
      <div className="dog-info">
        <p className="name">Name:{name}</p>
        <p>Price:${price}</p>
      </div>
      <button onClick={() => handeler(product)} className="btn-container">
        <p>
          Add TO Card
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Dog;
