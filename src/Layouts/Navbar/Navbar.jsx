import Classes from "/src/Layouts/Navbar/Navbar.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav_button from "../../Interface/Nav_Button/Nav_button";
import { useState, useEffect } from "react";

const Navbar = () => {
  // Navbar Color CHange
  const [navColor, setNavColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 60) {
        setNavColor(true);
      } else {
        setNavColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`${navColor ? Classes.nav1 : Classes.nav}`}>
        <div className={Classes.logo_wripper}>
          <h1 className={Classes.logo}>
            Foodie<span>!8</span>
          </h1>
        </div>

        <div className={Classes.nav_menu}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/:menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className={Classes.icon_btn_wripper}>
          <Nav_button />
          <div className={Classes.icon_wripper}>
            <FaCartArrowDown className={Classes.icon} />
            <div className={Classes.cart_count}>0</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
