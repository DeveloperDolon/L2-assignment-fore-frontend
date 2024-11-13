import MyContainer from '@/components/MyContainer/MyContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import RatingStar from '@/components/RatingStar';

const ProductDetails = () => {
  return (
    <MyContainer>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-16 sm:gap-14 gap-10'>
        <div>
          <Carousel
            dynamicHeight={true}
            className=''
          >
            <div>
              <img
                // className='w-full md:h-[400px] h-[300px]'
                src='https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <p className='legend'>Legend 1</p>
            </div>
            <div>
              <img
                // className='w-full md:h-[400px] h-[300px]'
                src='https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <p className='legend'>Legend 2</p>
            </div>
            <div>
              <img
                // className='w-full md:h-[400px] h-[300px]'
                src='https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              />
              <p className='legend'>Legend 3</p>
            </div>
          </Carousel>
        </div>

        <div>
          <h2 className='md:text-xl sm:text-lg text-base border-b-2 w-fit '>
            <Link to={'/product/3'}>Category name</Link>
          </h2>

          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold md:mt-5 sm:mt-4 mt-3'>
            The product name is here
          </h1>

          <div className='flex items-center gap-5 md:mt-2 mt-1'>
            <RatingStar />

            <p className='md:text-sm text-xs font-semibold text-gray-500 font-sans'>
              445 Reviews
            </p>
          </div>

          <div className='flex gap-4'>
            <h2 className='md:text-xl sm:text-lg text-base font-semibold font-sans text-red-500'>
              50$
            </h2>
            <h2 className='md:text-xl sm:text-lg text-base font-semibold font-sans line-through'>
              50$
            </h2>
          </div>
        </div>
      </div>

      <div></div>
    </MyContainer>
  );
};

export default ProductDetails;
