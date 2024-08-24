import bannerImage from '@/assets/bgImage.jpg';
import MyContainer from '@/components/MyContainer/MyContainer';

const Banner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(#00000085, #00000085), url(${bannerImage}) no-repeat center center`,
        backgroundSize: 'cover',
      }}
      className='bg-red-300'
    >
      <MyContainer className='min-h-screen flex items-center justify-center flex-col'>
        <h1 className='md:text-6xl sm:text-4xl text-3xl text-center font-bold text-white font-secondary'>
          Gear Up for Success – Your Fitness Journey Starts Here!
        </h1>
        <p className='md:text-sm text-xs font-medium md:mt-3 mt-2 text-white text-center md:leading-relaxed leading-relaxed'>
          Welcome to LiftNation, where top-tier fitness meets unbeatable
          quality. Whether you're a seasoned athlete or just starting your
          fitness journey, we offer a wide range of premium gym equipment
          designed to help you reach your goals. From strength training
          essentials to cardio machines, our products are built to last and
          perform. Empower your workouts, push your limits, and achieve
          greatness with gear that works as hard as you do. Start your
          transformation today!
        </p>
      </MyContainer>
    </div>
  );
};

export default Banner;
