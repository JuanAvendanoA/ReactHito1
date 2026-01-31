// esto es para manejar la carga de pizzas desde un API, en caso de que cambie dinamicamente el menu de pizzas//

// src/context/PizzaContext.jsx
import React, { createContext, useState, useEffect, useContext } from "react";

// Crea el context
const PizzaContext = createContext();

// Proveedor del context
export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simulando un fetch para obtener las pizzas
    const fetchPizzas = async () => {
      const response = await fetch("/api/pizzas");
      const data = await response.json();
      setPizzas(data);
    };
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>{children}</PizzaContext.Provider>
  );
};

// Hook para consumir el PizzaContext
export const usePizzas = () => useContext(PizzaContext);
