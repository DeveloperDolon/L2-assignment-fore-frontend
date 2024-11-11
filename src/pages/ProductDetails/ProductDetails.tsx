import MyContainer from '@/components/MyContainer/MyContainer';

const ProductDetails = () => {
  return (
    <MyContainer>
      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8'>
        <div>image slider side</div>

        <div>Details section</div>
      </div>

      <div></div>
    </MyContainer>
  );
};

export default ProductDetails;
