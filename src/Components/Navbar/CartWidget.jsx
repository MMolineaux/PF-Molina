import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../Context/CartContext";

const CartWidget = () => {
  const { cart, getTotal, getTotalQuantity, clearCart } =
    useContext(CartContext);

  const [OpenCart, setOpenCart] = useState(false);

  const handleMouseEnter = () => {
    setOpenCart(true);
  };
  const handleMouseLeave = () => {
    setOpenCart(false);
  };



  return (
    <div
      className="d-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cart.length > 0 && (
        <div
          style={{
            backgroundColor: "#CFCEB6",
            color: "#000",
            width: "20px",
            height: "20px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          {getTotalQuantity()}
        </div>
      )}

      {
        OpenCart && (
          <div>
            <ul>
              {cart.map((products) => 
              <li>
                <span>{products.name}</span>
                <span>{products.price}</span>
              </li>)}
            </ul>
          </div>
        )
      }

      <i className="cart-widget">
        <FontAwesomeIcon
          icon={faShoppingCart}
          style={{ marginRight: "20px" }}
        />
      </i>
    </div>
  );
};

export default CartWidget;
