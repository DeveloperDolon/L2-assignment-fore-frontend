import MyContainer from "../MyContainer/MyContainer";
import logoImage from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";

const NavBar = () => {
  return (
    <div>
      <MyContainer className="flex justify-between md:py-3 sm:py-2 py-1">
        <div>
          <img
            className="md:w-20 sm:w-14 w-10 md:h-12 sm:h-10 h-8"
            src={logoImage}
            alt="logo images"
          />
        </div>

        <div>
          <ul className="flex md:gap-4 gap-3 md:text-base sm:text-sm text-xs">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>

            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>

            <li>
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <IoCart />
        </div>
      </MyContainer>
    </div>
  );
};

export default NavBar;
