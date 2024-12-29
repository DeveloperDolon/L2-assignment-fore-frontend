import { MdOutlineCategory } from 'react-icons/md';
import MyContainer from '@/components/MyContainer/MyContainer';
import { useCategoryListQuery } from '@/redux/api/features/category.api';
import {
  Carousel as SCarousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


const Categories = () => {
  const { data: categories } = useCategoryListQuery(1);
  return (
    <MyContainer>
      <h1 className='flex font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <MdOutlineCategory />
        Products categories
      </h1>

      <div>
        <SCarousel className='w-full md:mt-7 mt-5'>
          <CarouselContent className=''>
            {categories?.data?.map((item: Category) => (
              <CarouselItem
                key={item?._id}
                className='sm:basis-1/2 md:basis-1/3 lg:basis-1/4'
              >
                <div
                  className=''
                  key={item?._id}
                >
                  <img
                    alt='category 1'
                    className='h-[250px] md:h-[400px] object-cover rounded-xl sm:h-[300px] w-full'
                    src='https://shop.lifefitness.com/cdn/shop/files/club-series-plus-elliptical-exerciser-1000x1000.jpg?v=1709138335&width=500'
                  />
                  <h2 className='font-semibold md:text-2xl my-5 text-center text-lg'>
                    {item?.name}
                  </h2>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </SCarousel>
      </div>
    </MyContainer>
  );
};

export default Categories;
