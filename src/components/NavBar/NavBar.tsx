import MyContainer from "../MyContainer/MyContainer";
import logoImage from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <MyContainer className="bg-red-50 flex justify-between">
        <div>
          <img src={logoImage} alt="logo images" />
        </div>

        <div>
          <ul>
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
      </MyContainer>
    </div>
  );
};

export default NavBar;
