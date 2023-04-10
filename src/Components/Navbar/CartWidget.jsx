import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = () => {
  return (
    <button className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: "10px" }} />
    </button>
  );
};

export default CartWidget;
