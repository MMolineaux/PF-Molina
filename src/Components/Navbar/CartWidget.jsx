import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <button style={{display: 'flex', alignItems: 'center', borderStyle: 'none', backgroundColor: '#f8f9fa' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
    </button>
  );
};

export default CartWidget;