import React, { createContext, useState } from "react";

// se define cart context

export const CartContext = createContext({
  cart: [],
  clearCart: () => {},
  isInCart: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  getTotalQuantity: () => {},
  getTotal: () => {},
});

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // 1 VACIAR CARRITO

  const clearCart = () => {
    setCart([]);
  };

  // 2 VERIFICAR SI ESTA EN CARRITO
  const isInCart = (id) => {
    return cart.find((item) => item.id === id) ? true : false;
  };

  // 3 AGREGAR PRODUCTO AL CARRITO

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + quantity };
          }
          return cartItem;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // 4 ELIMINAR DEL CARRITO

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => (item.id = !id));
    setCart(newCart);
  };

  // 5 obtener cantidad de productos del carrito
  const getTotalQuantity = () => {
    let quant = 0;
    cart.forEach((e) => (quant += e.quantity));
    return quant;
  };

  // 6 obtener el total del carrito

  const getTotal = () => {
    let total = 0;
    cart.forEach((e) => (total += e.quantity * e.price));
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        isInCart,
        addToCart,
        removeFromCart,
        getTotalQuantity,
        getTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;