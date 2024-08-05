import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MainLayout = () => {
  return (
    <>
      <div className="md:pb-5 pb-3">
        <NavBar />
      </div>
      <Outlet />
    </>
  );
};

export default MainLayout;
