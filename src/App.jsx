import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BusinessBranding from "./pages/BusinessBranding";
import BusinessPromotion from "./pages/BusinessPromotion";
import { Routes, Route } from 'react-router-dom'; 

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/branding" element={<BusinessBranding />} />
        <Route path="/promotion" element={<BusinessPromotion />} />
    </Routes>
  )
}

export default App;
