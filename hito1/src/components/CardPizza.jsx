import React from "react";
{/* Componente CardPizza que recibe props para mostrar información de cada pizza */}
const CardPizza = ({ name, price, ingredients, img }) => {
  return (
  
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {/* Lista de ingredientes formateada */}
        <p className="fw-bold mb-1">Ingredientes:</p>
        <p className="text-muted small lh-sm">
          🍕 {ingredients.join(", ")}
        </p>

        {/* Formateo de precio a moneda local (CLP) */}
        <p className="fw-bold text-center">
          Precio: ${price.toLocaleString("es-CL")}
        </p>
        {/* Botones de acción para ver más detalles o añadir al carrito */}
        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-secondary btn-sm">
            Ver Más 👀
          </button>
          <button className="btn btn-dark btn-sm">
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
