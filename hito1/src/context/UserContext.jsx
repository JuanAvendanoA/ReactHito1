import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const UserContext = createContext();

// Componente Provider que envuelve toda la aplicación
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(false); // Inicializamos el token en false (simulado)

  const login = () => {
    console.log("Login triggered"); // Log para debug
    setToken(true); // Cambiamos el estado a true cuando el usuario hace login
  };

  const logout = () => {
    console.log("Logout triggered"); // Log para debug
    setToken(false); // Cambiamos el estado a false cuando el usuario hace logout
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useUser = () => useContext(UserContext);
