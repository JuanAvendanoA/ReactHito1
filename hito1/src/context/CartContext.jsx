// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const CartContext = createContext();

// Proveedor del contexto
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Funcion para agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  };

  // Funcion para eliminar una pizza del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Calcula el total de la compra
  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotal }}>
      {children}
    </CartContext.Provider>
  );
};

// EL Hook para consumir el CartContext
export const useCart = () => useContext(CartContext);
