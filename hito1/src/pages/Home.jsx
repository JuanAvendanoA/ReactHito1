import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Se importa context
import CardPizza from "../components/CardPizza";
import { pizzas as localPizzas } from "../pizzas"; // Importar datos locales como fallback

const Home = () => {
  const [pizzas, setPizzas] = useState([]); // Estado para almacenar las pizzas
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const { addToCart } = useCart(); // Obtenemos la función para agregar al carrito

  // useEffect que obtiene las pizzas desde la API
  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const contentType = response.headers.get("content-type") || "";
        if (!response.ok) {
          const text = await response.text();
          console.error("API returned non-OK status:", response.status, text);
          throw new Error("No se pudo obtener las pizzas de la API");
        }
        if (contentType.includes("application/json")) {
          const data = await response.json();
          setPizzas(data); // Actualiza el estado con las pizzas obtenidas
        } else {
          const text = await response.text();
          console.error("Respuesta no JSON recibida desde /api/pizzas:", text);
          setError("Respuesta de la API inválida. Usando datos locales.");
          setPizzas(localPizzas);
        }
      } catch (error) {
        console.error(
          "Error al obtener pizzas de la API, usando datos locales:",
          error,
        );
        setError(
          "No se pudieron cargar las pizzas de la API. Se están usando datos locales.",
        );
        setPizzas(localPizzas); // Usar datos locales si la API falla
      } finally {
        setLoading(false); // Cambia el estado de carga cuando termine
      }
    };

    fetchPizzas();
  }, []);

  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      {error && <div className="alert alert-warning">{error}</div>}{" "}
      {/* Mostrar mensaje de error si es necesario */}
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
