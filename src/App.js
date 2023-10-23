import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { Restaurant } from "./pages/Restaurant";
import { Specials } from "./pages/Specials";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header className="header-component" />
      <hr />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/specials" element={<Specials />} />
        </Routes>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default App;
