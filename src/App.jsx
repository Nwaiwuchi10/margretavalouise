import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Services from "./components/Services";
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

import WhyInvest from "./components/WhyInvest";
import TestimonialSlider from "./components/Testmonial";
// import TradingTicker from "./components/TradingTicker/TradingTicker";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      {/* <TradingTicker /> */}
      <Services />
      <WhyInvest />
      <Work />
      <TestimonialSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
