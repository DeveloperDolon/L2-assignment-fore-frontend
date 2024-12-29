import MyContainer from '@/components/MyContainer/MyContainer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useParams } from 'react-router-dom';
import RatingStar from '@/components/RatingStar';
import { Button } from '@/components/ui/button';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { TiArrowMinimiseOutline } from 'react-icons/ti';
import { FaShippingFast } from 'react-icons/fa';
import { GiLoveMystery } from 'react-icons/gi';
import { useState } from 'react';
import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';
import Review from './Review';
import CartDrawer from '../../components/CartDrawer';
import { useProductListQuery, useShowProductQuery } from '@/redux/api/features/product.api';

const ProductDetails = () => {
  const {id} = useParams();
  const [quantityCount, setQuantityCount] = useState(1);
  const {data: productDetails} = useShowProductQuery(id);
  const {data: products} = useProductListQuery({page: 1});
  
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
                src={productDetails?.data?.images}
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
            <Link to={'/product/3'}>{productDetails?.data?.category_id?.name}</Link>
          </h2>

          <h1 className='md:text-3xl sm:text-2xl text-xl font-bold md:mt-5 sm:mt-4 mt-3'>
            {productDetails?.data?.product_name}
          </h1>

          <div className='flex items-center gap-5 md:mt-2 mt-1'>
            <RatingStar />

            <p className='md:text-sm text-xs font-semibold text-gray-500 font-sans'>
              445 Reviews
            </p>
          </div>

          <div className='flex gap-4 mt-2'>
            <h2 className='md:text-xl sm:text-lg text-base font-semibold font-sans text-red-500'>
              {productDetails?.data?.actual_price - productDetails?.data?.discount}$
            </h2>
            <h2 className='md:text-xl sm:text-lg text-base font-semibold font-sans line-through'>
              {productDetails?.data?.actual_price}$
            </h2>
          </div>

          <p className='md:mt-3 mt-2 font-medium md:text-sm text-xs flex items-center gap-2 '>
            <span className='h-2 w-2 rounded-full bg-green-500'></span>
            In stock, ready to ship
          </p>

          <div className='flex sm:flex-nowrap flex-wrap sm:gap-5 gap-3 md:mt-3 mt-2'>
            <div className='border px-3 flex items-center gap-2'>
              <button
                onClick={() => setQuantityCount(quantityCount + 1)}
                className='px-3 md:text-3xl sm:text-2xl text-xl font-medium'
              >
                +
              </button>
              <span className='md:text-xl sm:text-lg text-base font-medium'>
                {quantityCount}
              </span>
              <button
                onClick={() =>
                  setQuantityCount(quantityCount >= 1 ? quantityCount - 1 : 0)
                }
                className='px-3 md:text-3xl sm:text-2xl text-xl font-medium'
              >
                -
              </button>
            </div>

            <Button
              className='md:text-lg sm:text-base text-sm hover:bg-red-300 font-semibold active:scale-95 bg-red-600 rounded-lg w-full text-white'
              variant={'ghost'}
              size={'lg'}
            >
              Add to Card
            </Button>
          </div>

          <div className='md:mt-7 sm:mt-5 mt-4'>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
              <div className='flex items-center gap-3'>
                <RiMoneyDollarCircleLine className='md:text-5xl' />

                <p className='md:text-lg text-base font-medium'>
                  Best Price Guarantee
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <TiArrowMinimiseOutline className='md:text-5xl' />

                <p className='md:text-lg text-base font-medium'>
                  Hassle free returns
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <FaShippingFast className='md:text-5xl' />

                <p className='md:text-lg text-base font-medium'>
                  Fast Shipping
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <GiLoveMystery className='md:text-5xl' />

                <p className='md:text-lg text-base font-medium'>
                  <span className='font-sans'>3000+</span> Reviews
                </p>
              </div>
            </div>
          </div>

          <div className='md:mt-5 mt-4'>
            <p className='md:text-lg text-base font-semibold'>Description</p>

            <p className='md:text-sm text-xs font-medium md:leading-relaxed leading-relaxed mt-3'>
              {productDetails?.data?.description}
            </p>
          </div>
        </div>
      </div>

      <div className='md:px-0 px-8'>
        <h1 className='text-center font-secondary md:text-5xl sm:text-4xl text-3xl md:mt-16 sm:mt-14 mt-12'>
          Hot deals
        </h1>

        <SCarousel className='w-full md:mt-7 mt-5'>
          <CarouselContent className=''>
            {products?.data?.map((product: Product) => (
              <CarouselItem
                key={product?._id}
                className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
              >
                <ProductCard product={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </SCarousel>
      </div>

      <h1 className='md:text-5xl sm:text-4xl text-3xl font-secondary text-center md:mt-24 sm:mt-20 mt-16'>
        Reviews
      </h1>

      <hr className='md:mt-3 mt-2' />

      <div className='md:mt-5 mt-4 md:space-y-8 space-y-6'>
        {[1, 2, 3, 4, 5]?.map((item) => (
          <Review key={item} />
        ))}
      </div>

      <CartDrawer />
    </MyContainer>
  );
};

export default ProductDetails;
