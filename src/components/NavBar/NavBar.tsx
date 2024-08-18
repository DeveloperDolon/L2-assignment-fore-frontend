import MyContainer from "../MyContainer/MyContainer";
import logoImage from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { IoCart } from "react-icons/io5";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div>
      <MyContainer className="flex justify-between items-center md:py-3 sm:py-2 py-1">
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
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-500 text-white rounded py-1 px-3"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/products"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-500 text-white rounded py-1 px-3"
                    : ""
                }
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-red-500 text-white rounded py-1 px-3"
                    : ""
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <Button size={"sm"}>
            <IoCart className="md:text-2xl text-xl" />
          </Button>
        </div>
      </MyContainer>
    </div>
  );
};

export default NavBar;
