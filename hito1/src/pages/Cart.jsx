import { useCart } from "../context/CartContext"; // Importamos el CartContext
import { useUser } from "../context/UserContext"; // Importamos el hook de UserContext

const Cart = () => {
  const { cart, addToCart, removeFromCart, getTotal } = useCart(); // Consumimos el CartContext
  const { token } = useUser(); // Usamos el contexto para obtener el token del usuario

  // Funciones para aumentar y disminuir la cantidad de pizzas en el carrito
  const increase = (id) => {
    addToCart(cart.find((pizza) => pizza.id === id)); // Añadimos la pizza de nuevo para aumentar la cantidad
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

            <div>
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
        className="btn btn-dark mt-3"
        disabled={!token} // Deshabilitamos el botón si el token es false
      >
        Pagar
      </button>
    </div>
  );
};

export default Cart;
