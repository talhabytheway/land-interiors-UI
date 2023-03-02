import NavBar from './components/NavBar'
import Hero from './components/Hero'
import WhyLand from './components/WhyLand'
import WhatWeDo from './components/WhatWeDo'
import OurProjects from './components/OurProjects'
import Blogs from './components/Blogs'
import InteriorProd from './components/InteriorProd'
import Customers from './components/Customers'
import Talk from './components/Talk'
import Footer from './components/Footer'
function App() {
  return (
    <div className="font-pop">
      <>
        <NavBar/>
        <Hero/>
        <WhyLand/>
        <WhatWeDo/>
        <OurProjects/>
        <Blogs/>
        <InteriorProd/>
        <Customers/>
        <Talk/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
