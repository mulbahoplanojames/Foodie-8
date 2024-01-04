import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect } from "react";
import Home from "../src/Pages/Home";
import Navbar from "/src/Layouts/Navbar/Navbar.jsx";
import Footer from "./Layouts/Footer/Footer";
import Menu from "../src/Pages/Menu";
// import About from "../src/Pages/About";
// import Order from "../src/Pages/Order";
// import Contact from "../src/Pages/Contact";
// import Join_Us from "../src/Pages/JoinUs";
// import Cart from "../src/Pages/Cart";

const App = () => {
  useEffect(() => {
    Swal.fire({
      title: "Welcome to Foodie!8",
      text: "We provide good and quality sevices to our beloved customers.",
      icon: "success",
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:menu" element={<Menu />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
