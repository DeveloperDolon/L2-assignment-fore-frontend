import MyContainer from '@/components/MyContainer/MyContainer';
import aboutImg from '@/assets/about-img.jpg';

const AboutUs = () => {
  return (
    <>
      <MyContainer>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-8 md:mt-8 mt-6'>
          <h1 className='md:text-6xl sm:text-5xl text-4xl font-semibold text-center font-secondary'>
            About Us
          </h1>

          <p className='md:text-sm text-xs md:leading-relaxed leading-relaxed'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            cum nihil mollitia illum exercitationem vero amet minima aliquam
            eligendi. Saepe numquam explicabo modi nesciunt repellendus repellat
            temporibus assumenda recusandae nam? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Eos magni debitis, at assumenda maxime
            vitae nisi adipisci fuga recusandae necessitatibus cum expedita rem
            est minima eaque quam hic ducimus eligendi!
          </p>
        </div>
      </MyContainer>

      <div
        className='md:h-[600px] h-[400px] md:my-10 my-8'
        style={{
            background: `url(${aboutImg}) center center no-repeat`,
            backgroundSize: 'cover'
        }}
      >
        
      </div>
    </>
  );
};

export default AboutUs;
