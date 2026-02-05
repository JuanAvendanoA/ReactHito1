import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // se importa context
import CardPizza from "../components/CardPizza";
import { pizzas as localPizzas } from "../pizzas"; // importar datos locales como fallback

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useCart(); // Obtenemos la funcion para agregar al carrito

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener pizzas de la API, usando datos locales:", error);
        setPizzas(localPizzas); // Usar datos locales si la API falla
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div className="container my-5">
      <div className="row g-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              addToCart={() => addToCart(pizza)} // Pasamos la función addToCart
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
