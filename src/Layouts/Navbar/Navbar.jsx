import Classes from "/src/Layouts/Navbar/Navbar.module.css";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Nav_button from "../../Interface/Nav_Button/Nav_button";
import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import navLinks from "../../Components/Constants/Constant";

const Navbar = () => {
  // !Updating the card item
  const { getTotalCartItem } = useContext(ShopContext);

  //!Navbar Color CHange
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
          <Link to="/home" style={{ textDecoration: "none" }}>
            <h1 className={Classes.logo}>
              Foodie<span>!8</span>
            </h1>
          </Link>
        </div>

        <div className={Classes.nav_menu}>
          <ul>
            {navLinks.map((navlink) => {
              return (
                <li key={navlink.label}>
                  <Link to={navlink.href}>{navlink.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={Classes.icon_btn_wripper}>
          <Link to="/">
            <Nav_button />
          </Link>
          <div className={Classes.icon_wripper}>
            <Link to="/cart">
              <FaCartArrowDown className={Classes.icon} />
            </Link>
            <div className={Classes.cart_count}>{getTotalCartItem()}</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
