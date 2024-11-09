import MyContainer from '@/components/MyContainer/MyContainer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CiSearch } from 'react-icons/ci';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import productFilteringOptions from '@/utils/filteringOptions';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { AiFillProduct } from 'react-icons/ai';
import { Checkbox } from '@/components/ui/checkbox';

const Products = () => {
  return (
    <MyContainer>
      <p className='md:text-sm text-xs font-semibold md:mt-3 mt-2 italic'>
        Home/Products
      </p>

      <h1 className='flex justify-center font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <AiFillProduct /> Products
      </h1>

      <div className='grid md:grid-cols-8 grid-cols-1 md:gap-10 gap-0'>
        <div className='md:col-span-2'>
          <div className='flex w-full max-w-sm items-center space-x-2 mb-7'>
            <Input
              className='placeholder:text-gray-400'
              type='text'
              placeholder='Search results'
            />
            <Button
              size={'icon'}
              color='red'
              type='submit'
              variant={'secondary'}
              className='border font-bold hover:bg-slate-200 transition-all duration-300 active:scale-105'
            >
              <CiSearch />
            </Button>
          </div>

          <SidebarProvider>
            <SidebarMenu>
              {productFilteringOptions?.map((item) => (
                <SidebarMenuItem key={item?.menuName}>
                  {/* Wrap each item with its own Collapsible */}
                  <Collapsible
                    defaultOpen={true}
                    className='group/collapsible'
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item?.menuName + ' '}
                        <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item?.submenu?.map((submenu) => (
                          <SidebarMenuSubItem key={submenu?.label}>
                            <SidebarMenuButton>
                              <div className='flex items-center space-x-2'>
                                <Checkbox
                                  id='terms2'
                                  value={submenu?.value}
                                />
                                <label
                                  htmlFor='terms2'
                                  className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                                >
                                  {submenu?.label}
                                </label>
                              </div>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarProvider>
        </div>
        <div className='md:col-span-6 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-8 gap-6'>
          {[1, 2, 3, 4, 5].map((item) => (
            <ProductCard key={item} />
          ))}

          <div className='col-span-full md:mt-5 mt-3 mx-auto'>
            <Pagination>
              <PaginationContent>
                <PaginationItem className='font-secondary'>
                  <PaginationPrevious
                    className='font-semibold'
                    href='#'
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    className='font-sans text-xl'
                    href='#'
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    className='font-semibold'
                    href='#'
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Products;
