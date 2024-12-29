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
import { useProductListQuery } from '@/redux/api/features/product.api';

const FeaturedProducts = () => {
  const { data: products } = useProductListQuery({ page: 1 });

  return (
    <MyContainer className='md:mt-28 mt-24'>
      <h1 className='flex font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <SiOpenaigym /> Our best sellers
      </h1>

      <div className='gap-6 grid grid-cols-1 md:grid-cols-4 md:mt-7 mt-5 sm:grid-cols-3'>
        {products?.data?.map((product: Product) => (
          <ProductCard
            key={product?._id}
            product={product}
          />
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
