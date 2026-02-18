import React, { createContext, useState, useContext } from "react";

// Creamos el contexto
const UserContext = createContext();

// Componente Provider que envuelve toda la aplicación
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Cambiar a null para inicializar vacío
  const [email, setEmail] = useState(""); // Nuevo estado para el email

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error en login: ${response.status} ${text}`);
      }

      const data = await response.json();
      setToken(data.token); // Guarda el token JWT
      setEmail(data.email); // Guarda el email del usuario
      return data;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  };

  const logout = () => {
    setToken(null); // Elimina el token
    setEmail(""); // Elimina el email
  };

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error en el registro: ${response.status} ${text}`);
      }

      const data = await response.json();
      setToken(data.token); // Guarda el token JWT
      setEmail(data.email); // Guarda el email del usuario
      return data;
    } catch (error) {
      console.error("Error en el registro:", error);
      throw error;
    }
  };

  const getProfile = async () => {
    if (!token) return null;
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(`Error al obtener perfil: ${response.status} ${text}`);
      }
      const data = await response.json();
      if (data.email) setEmail(data.email);
      return data;
    } catch (err) {
      console.error("Error en getProfile:", err);
      return null;
    }
  };

  return (
    <UserContext.Provider
      value={{ token, email, login, logout, register, getProfile }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook para usar el contexto
export const useUser = () => useContext(UserContext); // Asegúrate de exportar esta línea correctamente
