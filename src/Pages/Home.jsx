import Hero from "../Components/Hero/Hero";
import How_It_Works from "../Components/How_It_Works/How_It_Works";
import PopularDishes from "../Components/Popular_Dishes/PopularDishes";
import Testimonial from "../Components/Testimonial/Testimonial";
import Promotion from "../Components/Promotion/Promotion";
import CallToAction from "../Components/CallToAction/CallToAction";

const Home = () => {
  return (
    <>
      <Hero />
      <How_It_Works />
      <PopularDishes />
      <Promotion />
      <Testimonial />
      <CallToAction />
    </>
  );
};

export default Home;
