import RatingStar from '@/components/RatingStar';
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from 'react-icons/bi';

const Review = () => {
  return (
    <div className='py-2 border-b'>
      <div className='flex justify-between items-center md:text-[10px] text-[8px] mb-1'>
        <p>Patrick</p>
        <p>about 1 month</p>
      </div>

      <RatingStar />

      <p className='md:text-lg sm:text-base text-sm font-semibold mt-1'>
        <span className='font-sans'> 4 </span>Stars
      </p>

      <p className='md:text-sm text-xs font-medium mt-1'>
        This product is great! It's made from high-quality materials and works
        well for my workouts. I highly recommend it!
      </p>

      <div className='my-2 flex justify-between items-center'>
        <p className='md:text-xs text-[1px] w-fit font-semibold bg-slate-200 rounded p-1'>
          Verified by shop
        </p>

        <div className='flex gap-2'>
          <div className='flex gap-1 items-center'>
            <button>
              <BiLike className='h-3 w-3 text-green-500' />
            </button>
            <span className='ml-1 md:text-xs text-[10px] font-sans'>23</span>
          </div>

          <div className='flex gap-1 items-center'>
            <button>
              <BiDislike className='h-3 w-3 text-red-500' />
            </button>
            <span className='ml-1 font-sans md:text-xs text-[10px]'>15</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
