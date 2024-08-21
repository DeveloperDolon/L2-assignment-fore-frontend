import bannerImage from '@/assets/bgImage.jpg';

const Banner = () => {
  return (
    <div
      style={{
        background: `url(${bannerImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
      className='min-h-screen bg-red-300'
    ></div>
  );
};

export default Banner;
