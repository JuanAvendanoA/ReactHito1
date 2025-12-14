import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardPizza from "./components/CardPizza";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/*COntenedor de las tarjetas de pizzas se agrego a la container-fluid-my-5, fluid para que abarque toda la pantalla del navegador y se adapte*/}
      <div className="container-fluid my-5">
        <div className="row justify-content-center g-4">
          
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="https://static.apidae-tourisme.com/filestore/objets-touristiques/images/29/222/8773149-diaporama.png"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
