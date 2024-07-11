import FeaturesSection from "./components/FeaturesSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Workflow from "./components/Workflow";

const App = () => {
  return (
    <>
      <Navbar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection/>
        <FeaturesSection/>
        <Workflow/>
        <Price/>
      </div>
      
    </>
  );
};

export default App;
