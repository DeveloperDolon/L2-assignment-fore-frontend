import { MdOutlineCategory } from 'react-icons/md';
import MyContainer from '@/components/MyContainer/MyContainer';

import style from './Home.module.scss';

const Categories = () => {
  return (
    <MyContainer>
      <h1 className='flex font-semibold gap-3 items-center mb-8 md:text-4xl mt-10 sm:text-2xl text-lg'>
        <MdOutlineCategory />
        Products categories
      </h1>

      <div
        className={`flex items-center gap-10 overflow-x-scroll ${style.category_container}`}
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            className='md:w-[500px] rounded-xl shrink-0 sm:w-[400px] w-[260px]'
            key={item}
          >
            <img
              alt='category 1'
              className='h-[250px] md:h-[400px] object-cover rounded-xl sm:h-[300px] w-full'
              src='https://shop.lifefitness.com/cdn/shop/files/club-series-plus-elliptical-exerciser-1000x1000.jpg?v=1709138335&width=500'
            />
            <h2 className='font-semibold md:text-2xl my-5 text-center text-lg'>
              Treadmills
            </h2>
          </div>
        ))}
      </div>
    </MyContainer>
  );
};

export default Categories;
