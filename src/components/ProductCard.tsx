import RatingStar from './RatingStar';

const ProductCard = () => {
  return (
    <div className='border p-6 relative'>
      <div className='absolute bg-black font-secondary px-3 py-1 right-6 rounded-sm text-white top-6 w-fit'>
        SALE
      </div>
      <div>
        <img
          alt='product-image'
          className='h-[180px] md:h-[250px] object-cover sm:h-[200px] w-full'
          src='https://mightyfitness.shop/cdn/shop/products/MightyFitness-HexDumbbells-15LBs.jpg?v=1644620703&width=540'
        />
      </div>

      <div className='md:mt-5 mt-4'>
        <h2 className='font-semibold md:text-lg text-base text-center'>
          Mighty HEX Dumbbells - Elite
        </h2>

        <div className='flex font-medium gap-3 items-center md:mt-3 md:text-base mt-2 text-sm'>
          <p className='font-sans text-red-500'>From $2000</p>

          <p className='font-sans line-through'>$3000</p>
        </div>

        <RatingStar />
      </div>
    </div>
  );
};

export default ProductCard;
