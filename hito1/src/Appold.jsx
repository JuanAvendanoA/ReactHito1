import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

//Home (COMENTADO)
//import Home from "./components/Home";

// HITO 2 - LOGIN / REGISTER (COMENTADO)
//import Login from "./components/Login";
//import Register from "./components/Register";

// HITO 1 (COMENTADO)
// import Header from "./components/Header";
// import CardPizza from "./components/CardPizza";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* ===================== */}
      {/* HITO 2 - LOGIN / REGISTER */}
      {/* ===================== */}
      <main className="flex-grow-1 d-flex justify-content-center align-items-center">
        <Login />
        {/* en donde dice Register aca arriba se debe cambia a Login y viceversa para probar si funcionan Login y Register /> */}
      </main>

      {/* ===================== */}
      {/* HITO 1 - HOME (COMENTADO) se comenta este hito ya que no queda claro si para este hito se debian habilitar los botones de navbar*/}
      {/* ===================== */}
      {/*
      <Header />

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
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media"
            />
          </div>
        </div>
      </div>
      */}

      <Footer />
    </div>
  );
};

export default App;


