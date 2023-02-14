import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartWidget = () => {
  const [selectedItems, setSelectedItems] = useState(0);

  const handleItemSelection = () => {
    setSelectedItems(selectedItems + 1);
  };

  return (
    <div className="cart-container">
      <button className="shop-btn" onClick={handleItemSelection}>
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="selected-items">{selectedItems}</span>
      </button>
    </div>
  );
};

export default CartWidget