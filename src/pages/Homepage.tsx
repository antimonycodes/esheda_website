import AdsTemplates from "../components/AdsTemplates";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Four from "../components/Four";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stages from "../components/Stages";
import Template from "../components/Template";
import Token from "../components/Token";
import VidCard from "../components/VidCard";
import Waitlist from "../components/Waitlist";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <VidCard />
      <Four />
      <Stages />
      <Token />
      <Template />
      <Marquee />
      <AdsTemplates />
      <Faq />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default Homepage;
