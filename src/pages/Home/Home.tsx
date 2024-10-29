import Banner from './Banner';
import BenefitsSection from './BenefitsSection';
import Categories from './Categories';
import FeaturedProducts from './FeaturedProducts';
import ImageGallery from './ImageGallery';

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <BenefitsSection />
      <ImageGallery />
    </>
  );
};

export default Home;
