import { BrowserRouter, Routes, Route } from "react-router-dom";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import Home from "../src/Pages/Home";
import Navbar from "/src/Layouts/Navbar/Navbar.jsx";
import Footer from "./Layouts/Footer/Footer";
import Menu from "../src/Pages/Menu";
import About from "../src/Pages/About";
import Product from "./Components/Product_Main/Product";
import Contact from "../src/Pages/Contact";
import Join_Us from "../src/Pages/JoinUs";
import Cart from "../src/Pages/Cart";

//Login and SignUp Pages
import SignUp from "/src/Components/SIngUp/SignUp.jsx";
import LogIn from "/src/Components/Login/Login.jsx";

// Products Components
import Burger from "./Components/Products/Burger/Burger";
import Pizza from "./Components/Products/Pizza/Pizza";
import Coffee from "./Components/Products/Coffee/Coffee";
import Chicken from "./Components/Products/Chicken/Chicken";
import Fruits from "./Components/Products/Fruits/Fruits";

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
          <Route path="/" element={<Join_Us />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/burger" element={<Burger category={"Burger"} />} />
          <Route path="/pizza" element={<Pizza category={"Pizza"} />} />
          <Route path="/chicken" element={<Chicken category={"Chicken"} />} />
          <Route path="/coffee" element={<Coffee category={"Coffee"} />} />
          <Route path="/fruits" element={<Fruits category={"Fruits"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
