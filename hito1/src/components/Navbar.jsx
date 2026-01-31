import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Se importa el context

const Navbar = () => {
  const { getTotal } = useCart(); // Usamos la función getTotal del CartContext
  const total = getTotal(); // Se obtiene el total dinámico del carrito
  const token = false; // Cambia a true si el usuario está logueado

  return (
    <nav
      className="navbar navbar-dark bg-dark px-4 position-relative"
      style={{ zIndex: 10 }}
    >
      <div className="container-fluid d-flex justify-content-between">
        {/* botones alineación izquierda */}
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
              <button className="btn btn-outline-light btn-sm">
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

        {/* total alineación derecha */}
        <Link to="/cart" className="btn btn-info text-dark fw-bold btn-sm">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
