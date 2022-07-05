import './App.css';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NavSection from './Components/NavSection/NavSection';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Service/Services';
import Testimonial from './Components/Testimonial/Testimonial';
import Work from './Components/Work/Work';
function App() {
  return (
    <div className="App">
      <NavSection />
      <Home />
      <Services />
      <Experience />
      <Work/>
      <Portfolio/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
