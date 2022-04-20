import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { item } = props;
  return (
    <div className="cart">
      <div className="cart-img d-flex justify-content-center  align-items-center ">
        <img src={item.img} alt="" />
        <h6>{item.name} <br />
        </h6>
      </div>
      
    </div>
  );
};

export default Cart;
