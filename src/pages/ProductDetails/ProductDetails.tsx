import MyContainer from '@/components/MyContainer/MyContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const ProductDetails = () => {
  return (
    <MyContainer>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8'>
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

        <div>Details section</div>
      </div>

      <div></div>
    </MyContainer>
  );
};

export default ProductDetails;
