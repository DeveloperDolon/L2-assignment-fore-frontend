import MyContainer from '@/components/MyContainer/MyContainer';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { AiFillProduct } from 'react-icons/ai';

const Products = () => {
  return (
    <MyContainer>
      <p className='md:text-sm text-xs font-semibold md:mt-3 mt-2'>
        Home/Products
      </p>

      <h1 className='flex justify-center font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <AiFillProduct /> Products
      </h1>

      <div className='grid md:grid-cols-8 grid-cols-1 md:gap-10 gap-0'>
        <div className='md:col-span-2'>
          <SidebarProvider>
            <SidebarMenu>
              <Collapsible
                defaultOpen
                className='group/collapsible'
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      Hello world{' '}
                      <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem> Hello world</SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarProvider>
        </div>

        <div className='md:col-span-6'>Outlet</div>
      </div>
    </MyContainer>
  );
};

export default Products;
