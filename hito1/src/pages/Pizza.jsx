import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/pizzas/p001", //donde dice p002 y etc.. es el id de la pizza, al cambiarlo carga otra seleccion del archivo pizzas.json
        );
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza", error);
      }
    };

    getPizza();
  }, []);

  if (!pizza) {
    return <p>Cargando pizza...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          <h3 className="card-title">{pizza.name}</h3>
          <p className="card-text">{pizza.desc}</p>

          <h5>Ingredientes:</h5>
          <ul>
            {(pizza.ingredients || []).map((ing, index) => (
              <li key={index}>🍕 {ing}</li>
            ))}
          </ul>

          <h4 className="mt-3">Precio: ${pizza.price}</h4>

          <button className="btn btn-danger mt-2">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
