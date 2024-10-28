import MyContainer from '@/components/MyContainer/MyContainer';

const Categories = () => {
  return (
    <MyContainer>
      <h1 className='font-semibold mb-8 md:text-4xl mt-10 sm:text-2xl text-lg'>
        Products categories
      </h1>

      <div className='grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3'>
        <div></div>

        <div></div>

        <div></div>
      </div>
    </MyContainer>
  );
};

export default Categories;
