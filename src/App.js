import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Work/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";



export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme =() => {
    setTheme((curr)=>(curr ==="light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <span className="toggle"><ReactSwitch onChange={toggleTheme} checked ={theme==="dark"}/></span>
        <Navbar />
        <Home />
        <Services />
        <Experience />
        <Work />
        <Portfolio />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
