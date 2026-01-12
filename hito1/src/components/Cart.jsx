import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container my-5">
      <h4>Detalles del pedido:</h4>

      {cart.map((pizza) => (
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
      ))}

      <h5>Total: ${total.toLocaleString()}</h5>

      <button className="btn btn-dark mt-3">Pagar</button>
    </div>
  );
};

export default Cart;
