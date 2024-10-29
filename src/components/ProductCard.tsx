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

const RatingStar = () => {
  return (
    <div className='flex items-center mt-2'>
      <svg
        className='w-4 h-4 text-yellow-300 me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-4 h-4 text-yellow-300 me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-4 h-4 text-yellow-300 me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-4 h-4 text-yellow-300 me-1'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <svg
        className='w-4 h-4 text-gray-300 me-1 dark:text-gray-500'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 22 20'
      >
        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
      </svg>
      <p className='font-sans'>(4.5)</p>
    </div>
  );
};
