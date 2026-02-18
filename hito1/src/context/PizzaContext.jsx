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
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok) {
          const text = await response.text();
          console.error("PizzaContext: API error", response.status, text);
          return;
        }
        if (contentType.includes("application/json")) {
          const data = await response.json();
          setPizzas(data);
        } else {
          const text = await response.text();
          console.error("PizzaContext: respuesta no JSON:", text);
        }
      } catch (err) {
        console.error("PizzaContext fetch error:", err);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas }}>{children}</PizzaContext.Provider>
  );
};

// Hook para consumir el PizzaContext
export const usePizzas = () => useContext(PizzaContext);
