import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

export const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <h1>This is the home page.</h1>,
      },
      {
        path: "/products",
        element: <h2>This is the product page.</h2>,
      },
    ],
  },
]);
