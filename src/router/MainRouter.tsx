import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '@/pages/Home/Home';
import Products from '@/pages/Products/Products';
import ProductDetails from '@/pages/ProductDetails/ProductDetails';
import ProductManagement from '@/pages/ProductManagement/ProductManagement';

export const MainRoute = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'product-management',
        element: <ProductManagement />,
      },
    ],
  },
]);
