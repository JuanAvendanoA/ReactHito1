import { useCart } from "../context/CartContext"; // Importamos el CartContext
import { useUser } from "../context/UserContext"; // Importamos el hook de UserContext
import { useState } from "react";

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart(); // Consumimos el CartContext
  const { token } = useUser(); // Usamos el contexto para obtener el token del usuario

  // Funciones para aumentar y disminuir la cantidad de pizzas en el carrito
  const increase = (id) => {
    const pizza = cart.find((pizza) => pizza.id === id);
    addToCart(pizza); // Añadimos la pizza de nuevo para aumentar la cantidad
  };

  const decrease = (id) => {
    const pizza = cart.find((pizza) => pizza.id === id);
    if (pizza.count > 1) {
      removeFromCart(id); // Eliminamos una unidad de la pizza
      addToCart(pizza); // La agregamos nuevamente para aumentar la cantidad
    } else {
      removeFromCart(id); // Si la cantidad es 1, simplemente la eliminamos
    }
  };

  const total = getTotal(); // Obtenemos el total a través del CartContext
  const { clearCart } = useCart();
  const [success, setSuccess] = useState(false);
  const { token } = useUser();

  return (
    <div className="container my-5">
      <h4>Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        cart.map((pizza) => (
          <div
            key={pizza.id}
            className="d-flex align-items-center justify-content-between mb-3"
          >
            <div className="d-flex align-items-center gap-3">
              <img src={pizza.img} width="60" alt={pizza.name} />
              <span>{pizza.name}</span>
            </div>

            <span>${pizza.price.toLocaleString()}</span>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => decrease(pizza.id)}
              >
                -
              </button>

              <span className="mx-2">{pizza.count}</span>

              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => increase(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      <h5>Total: ${total.toLocaleString()}</h5>

      <button
        className="btn btn-dark mt-3 w-100"
        disabled={!token}
        onClick={async () => {
          if (!token) {
            alert("¡Debes iniciar sesión para realizar el pago!");
            return;
          }

          try {
            const res = await fetch("http://localhost:5000/api/checkouts", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ cart }),
            });

            if (!res.ok) {
              const text = await res.text();
              throw new Error(text || "Error en pago");
            }

            setSuccess(true);
            clearCart();
          } catch (err) {
            console.error("Checkout error:", err);
            alert("Error al procesar el pago: " + err.message);
          }
        }}
      >
        Pagar
      </button>

      {success && (
        <div className="alert alert-success mt-3">Compra realizada con éxito 🎉</div>
      )}
    </div>
  );
};

export default Cart;
