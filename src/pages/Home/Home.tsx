import bgImage from "../../assets/bgImage.jpg";

const Home = () => {
  return <div 
  style={{
    background: `url(${bgImage}) no-repeat center center`,
    backgroundSize: "cover"
  }}
  className="min-h-screen bg-red-300"
  >

  </div>;
};

export default Home;
