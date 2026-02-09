import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { getTotal } = useCart(); // Usamos la función getTotal del CartContext
  const total = getTotal(); // Se obtiene el total dinámico del carrito
  const { token, logout } = useUser(); // Obtenemos el estado del token y la función logout

  console.log("Token:", token); // Log para verificar el valor del token

  const handleLogout = () => {
    console.log("Logout button clicked");
    logout();
  };

  return (
    <nav
      className="navbar navbar-dark bg-dark px-4 position-relative"
      style={{ zIndex: 10 }}
    >
      <div className="container-fluid d-flex justify-content-between">
        <div className="d-flex align-items-center gap-2">
          <span className="navbar-brand mb-0">🍕 Pizzería Mamma Mia</span>

          <Link to="/" className="btn btn-outline-light btn-sm">
            🍕 Home
          </Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                🔓 Profile
              </Link>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleLogout}
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">
                🔐 Register
              </Link>
            </>
          )}
        </div>

        <Link to="/cart" className="btn btn-info text-dark fw-bold btn-sm">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
