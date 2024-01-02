import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/src/Layouts/Navbar/Navbar.jsx";
import Home from "../src/Pages/Home";
import Swal from "sweetalert2";
import { useEffect } from "react";
// import About from "../src/Pages/About";
// import Menu from "../src/Pages/Menu";
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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
