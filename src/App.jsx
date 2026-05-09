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
import JobVacancies from "./pages/JobVacancies";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import AppDevelopment from "./pages/services/AppDevelopment";
import UiDesign from "./pages/services/UiDesign";
import PaidAdvertisement from "./pages/services/PaidAdvertisement";
import BulkWhatsappMarketing from "./pages/services/BulkWhatsappMarketing";
import ContentMarketing from "./pages/services/ContentMarketing";
import SeoOptimization from "./pages/services/SeoOptimization";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";

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
        <Route path="/showCasePage" element={<ShowCase />} />
        <Route path="/career" element={<Career />} />
        <Route path="/jobVacancies" element={<JobVacancies />} />
        <Route path="/websiteDevelopment" element={<WebsiteDevelopment />} />
        <Route path="/appDevelopment" element={<AppDevelopment />} />
        <Route path="/uiDesign" element={<UiDesign />} />
        <Route path="/paidAdvertisement" element={<PaidAdvertisement />} />
        <Route path="/bulkWhatsappMarketing" element={<BulkWhatsappMarketing />} />
        <Route path="/contentMarketing" element={<ContentMarketing />} />
        <Route path="/seoOptimization" element={<SeoOptimization />} />
        <Route path="/socialMediaMarketing" element={<SocialMediaMarketing />} />
      </Route>
    </Routes>
  )
}

export default App;
