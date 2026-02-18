import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import { PizzaProvider } from "./context/PizzaContext";
import { UserProvider } from "./context/UserContext"; // Asegúrate de importar el UserProvider

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <PizzaProvider>
            <div className="d-flex flex-column min-vh-100">
              <Navbar />
              <main className="flex-grow-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/pizza/p001" element={<Pizza />} />
                  <Route
                    path="/profile"
                    element={
                      <ProtectedRoute>
                        <Profile />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </PizzaProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

// Ruta protegida que solo permite el acceso si el usuario está autenticado
const ProtectedRoute = ({ children }) => {
  const { token } = useUser(); // Obtenemos el token del contexto de usuario
  if (!token) {
    // Redirige a login si no está autenticado
    return <Navigate to="/login" replace />;
  }
  return children; // Si está autenticado, muestra el contenido de la ruta
};

export default App;
