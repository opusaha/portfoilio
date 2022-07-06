import { createContext,useState } from 'react';
import ReactSwitch from 'react-switch';
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

export const ThemeContext = createContext (null);
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className="App" id={theme}>
      <NavSection />
      <div className="switch">
          <label> {theme === "light" ? "☼" : "🌙"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      <Home />
      <Services />
      <Experience />
      <Work/>
      <Portfolio/>
      <Testimonial />
      <Contact />
      <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
