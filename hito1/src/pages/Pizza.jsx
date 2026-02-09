import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Se Importa useParams

const Pizza = () => {
  const { id } = useParams(); // Se Obtiene el id de la pizza desde la URL
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(false); // Para manejar errores de carga

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`); // Usamos el id dinámico de la URL
        if (!res.ok) {
          throw new Error("Pizza no encontrada");
        }
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza", error);
        setError(true);
      }
    };

    getPizza();
  }, [id]); // Se asegura que el efecto se ejecute cada vez que el id cambie

  if (error) {
    return (
      <p>Hubo un problema al cargar la pizza. Intenta de nuevo más tarde.</p>
    );
  }

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
