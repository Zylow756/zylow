import Home from "./pages/Home";
import Services from "./pages/Services";
import { Routes, Route } from 'react-router-dom'; 

function App() {

  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
    </Routes>
  )
}

export default App;
