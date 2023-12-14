import Header from "components/header/Header";
import HeroSection from "components/heroSection/HeroSection";
import MobileApp from "components/mobileApp/MobileApp";
import Card from "components/card/Card";
import Footer from "components/footer/Footer";
import Categories from "components/category/Categories";
import Campaigns from "components/campaigns/Campaigns";
import Favorites from "components/favorites/Favorites";
import {
  useWindowWidth,
} from '@react-hook/window-size'
function App() {
  const windowWidth = useWindowWidth()
  return (
    <div className="overflow-hidden">
     <Header/>
     {windowWidth<= 768 && <Campaigns/>}
     <HeroSection/>
    <Categories/>
    {windowWidth>768 && <Campaigns/>}
    <Favorites/>
     <MobileApp/>
     <Card/>
     <Footer/>
    </div>
  );
}

export default App;
