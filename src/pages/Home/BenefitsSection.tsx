import MyContainer from '@/components/MyContainer/MyContainer';
import { Button } from '@/components/ui/button';
import { SiBentoml } from 'react-icons/si';

const BenefitsSection = () => {
  return (
    <MyContainer className='md:mt-28 mt-24'>
      <h1 className='flex font-secondary font-semibold gap-3 items-center mb-8 md:text-5xl mt-10 sm:text-3xl text-xl'>
        <SiBentoml /> Benefits
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-7 md:mt-7 mt-5 sm:grid-cols-3'>
        <div className='bg-black flex flex-col gap-1 items-center justify-center h-[500px] md:col-span-5 md:h-[700px] p-10 sm:col-span-2 sm:h-[600px] text-white'>
          <h1 className='font-secondary md:text-5xl text-3xl'>
            Hammer Strength
          </h1>

          <p className='font-semibold md:text-base text-sm'>
            BUILDING CHAMPIONS
          </p>

          <p className='leading-relaxed md:leading-relaxed md:text-xs mt-1 text-[10px] text-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla hic
            fuga odit vitae nam dolore alias ut. Praesentium ipsa voluptas
            cumque architecto, commodi temporibus laborum nesciunt
            necessitatibus aliquid modi, fuga amet? Quasi in nulla omnis sed,
            excepturi commodi provident alias voluptas, quod laborum ex aperiam
            architecto voluptatum, similique tempore assumenda.
          </p>

          <Button className='bg-white hover:bg-slate-300 md:mt-5 mt-3 text-black'>
            Shop now
          </Button>
        </div>

        <div className='flex flex-col md:col-span-2 bg-red-300'>
          <img
            alt='benefits image'
            className='flex-shrink-0 h-[250px] md:h-[350px] sm:h-[300px] w-full'
            src='https://shop.lifefitness.com/cdn/shop/files/strength-1000x1000.jpg?v=1695223622&width=600'
          />
          <img
            alt='benefits image'
            className='flex-shrink-0 h-[250px] md:h-[350px] sm:h-[300px] w-full'
            src='https://cdn.shopify.com/s/files/1/0414/3713/5010/files/hexdumbbell1_480x480.jpg?v=1647555846'
          />
        </div>
      </div>
    </MyContainer>
  );
};

export default BenefitsSection;
