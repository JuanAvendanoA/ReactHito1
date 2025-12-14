import React from "react";
import headerImg from "../assets/header.jpg"; {/*invoca la imagen del header en el apoyo del hito1*/}

{/*se crea el componente Header con estilos en linea para la imagen de fondo y clases de bootstrap para el texto y alineacion*/}
const Header = () => {
  return (
    
    <header 
    className="text-white text-center d-flex align-items-center"
    style={{
      backgroundImage: `url(${headerImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "300px",
     }} 
   >
    {/* Overlay oscuro del Header*/}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-75"></div>

      {/* Contenido */}
      <div className="container h-100 position-relative d-flex flex-column justify-content-center text-center">
        <h1>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </div>
    </header>
  );
};

export default Header;
