import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existingPizza = prev.find(item => item.id === pizza.id);
      if (existingPizza) {
        return prev.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...pizza, quantity: 1 }];
    });
};

const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
};

const clearCart = () => {
    setCart([]);
};

const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
