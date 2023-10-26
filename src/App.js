import "./App.css";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Footer from "./components/Footer";
import { Home } from "./pages/Home";
import { Booking } from "./pages/Booking";
import { About } from "./pages/About";
import { Reviews } from "./pages/Reviews";
// layouts
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/reviews" element={<Reviews />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
