import { Routes, Route } from 'react-router-dom'; 
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";
import BusinessBranding from "./pages/BusinessBranding";
import BusinessPromotion from "./pages/BusinessPromotion";
import Pricing from "./pages/Pricing";
import Enquiry from "./pages/Enquiry";
import ShowCase from "./pages/ShowCasePage";
import Career from "./pages/Career";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/branding" element={<BusinessBranding />} />
        <Route path="/promotion" element={<BusinessPromotion />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/showCasePage" element= {<ShowCase />}/>
        <Route path="/career" element={<Career />} />
        </Route>
    </Routes>
  )
}

export default App;
