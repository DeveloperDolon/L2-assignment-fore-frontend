import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const MainLayout = () => {
  return (
    <>
      <div className='md:pb-5 pb-3'>
        <NavBar />
      </div>
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default MainLayout;
