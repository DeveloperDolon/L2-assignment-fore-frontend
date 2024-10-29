import { SiOpenaigym } from 'react-icons/si';
import MyContainer from '@/components/MyContainer/MyContainer';
import ProductCard from '@/components/ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const FeaturedProducts = () => {
  return (
    <MyContainer className='md:mt-28 mt-24'>
      <h1 className='flex font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <SiOpenaigym /> Our best sellers
      </h1>

      <div className='gap-6 grid grid-cols-1 md:grid-cols-4 md:mt-7 mt-5 sm:grid-cols-3'>
        {[1, 2, 3, 4, 5].map((item) => (
          <ProductCard key={item} />
        ))}
      </div>

      <div className='md:mt-5 mt-3'>
        <Pagination>
          <PaginationContent>
            <PaginationItem className='font-secondary'>
              <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                className='font-sans'
                href='#'
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href='#' />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </MyContainer>
  );
};

export default FeaturedProducts;
