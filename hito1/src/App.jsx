import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

// HITO 3
// import Home from "./components/Home";
// import Login from "./components/Login";
// import Register from "./components/Register";

// HITO 1
// import Header from "./components/Header";
// import CardPizza from "./components/CardPizza";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        {/* <Home /> */}
        {/* <Login /> */}
        {/* <Register /> */}

        <Cart />
      </main>

      <Footer />
    </div>
  );
};

export default App;
