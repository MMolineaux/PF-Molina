import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <button style={{display: 'flex', alignItems: 'center', borderStyle: 'none' }}>
      <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
      {/* <div style={{ backgroundColor: '#CFCEB6', color: '#000', width: '20px', height: '20px', borderRadius: '10px', textAlign: 'center' }}>
        1
      </div> */}
    </button>
  );
};

export default CartWidget;