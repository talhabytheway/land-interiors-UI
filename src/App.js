import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import WhyLand from './components/whyLand/WhyLand'
import OurProjects from './components/ourProjects/OurProjects'
import InteriorProd from './components/interiorProd/InteriorProd'
import Customers from './components/customers/Customers'
import Talk from './components/talk/Talk'
import Footer from './components/footer/Footer'


import rectangle from "../src/assets/rectangleProj.svg";

function App() {
  return (
    <div className="font-pop">
      <>
        <NavBar/>
        <Hero/>
        <WhyLand/>
    <div className="bg-cover" style={{ backgroundImage: `url(${rectangle})` }}>
        <OurProjects/>
        <InteriorProd/>
    </div>
        <Customers/>
        <Talk/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
