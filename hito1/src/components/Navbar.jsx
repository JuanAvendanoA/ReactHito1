import React from "react";

const Navbar = () => {
  const total = 25000; // Total de la compra
  const token = false; // Cambiar a true si el usuario está logueado

  {/*la barra de navegacion de la pizzeria con botones de navegacion y total de compra, se tuvo que subir un poco con zIndex por que el overlay oscuro del header lo oscurecio tambien, esto esta declarado en el classname navbar*/}
  return (
   
   <nav className="navbar navbar-dark bg-dark px-4 position-relative" style={{ zIndex: 10 }}>
      <div className="container-fluid d-flex justify-content-between">

        {/* botones alineacion izquierda */}
        <div className="d-flex align-items-center gap-2">
          <span className="navbar-brand mb-0">
            🍕 Pizzería Mamma Mia
          </span>

          <button className="btn btn-outline-light btn-sm">
            🍕 Home
          </button>

          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">
                🔓 Profile
              </button>
              <button className="btn btn-outline-light btn-sm">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light btn-sm">
                🔐 Login
              </button>
              <button className="btn btn-outline-light btn-sm">
                🔐 Register
              </button>
            </>
          )}
        </div>

        {/* muestra de total alineacion derecha */}
        <button className="btn btn-info text-dark fw-bold btn-sm">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>

      </div>
    </nav>
  );
};

export default Navbar;