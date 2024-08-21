import bannerImage from '@/assets/bgImage.jpg';
import MyContainer from '@/components/MyContainer/MyContainer';

const Banner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(black, white), url(${bannerImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
      className='bg-red-300'
    >
      <MyContainer className='min-h-screen flex items-center justify-center'>
        <h1 className='md:text-6xl sm:text-4xl text-3xl text-center font-bold text-white font-secondary'>
          Welcome to Our Online Store!
        </h1>
      </MyContainer>
    </div>
  );
};

export default Banner;
