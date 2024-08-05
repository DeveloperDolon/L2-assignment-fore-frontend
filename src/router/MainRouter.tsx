import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
]);
