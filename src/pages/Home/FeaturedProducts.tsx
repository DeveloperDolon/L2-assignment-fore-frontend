import { SiOpenaigym } from 'react-icons/si';
import MyContainer from '@/components/MyContainer/MyContainer';

const FeaturedProducts = () => {
  return (
    <MyContainer className='md:mt-28 mt-24'>
      <h1 className='flex font-semibold gap-3 items-center mb-8 md:text-4xl mt-10 sm:text-2xl text-lg'>
        <SiOpenaigym /> Our best sellers
      </h1>
    </MyContainer>
  );
};

export default FeaturedProducts;
