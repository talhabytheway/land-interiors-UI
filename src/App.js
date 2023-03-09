import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import WhyLand from './components/WhyLand/WhyLand'
import OurProjects from './components/OurProjects/OurProjects'
import InteriorProd from './components/InteriorProd/InteriorProd'
import Customers from './components/Customers/Customers'
import Talk from './components/Talk/Talk'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div className="font-pop">
      <>
        <NavBar/>
        <Hero/>
        <WhyLand/>
        <OurProjects/>
        <InteriorProd/>
        <Customers/>
        <Talk/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
