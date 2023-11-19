import "./App.css";
import LandingPage from "./components/Landing";
import UpsellPage from "./components/Upsell";
import OfferPage from "./components/Offer";
import SpartanPage from "./components/Spartan";
import SpartanGeneralPage from "./components/SpartanGeneral";
import FreePage from "./components/Free";
import { Routes, Route } from 'react-router-dom';

function App() {
  document.title = 'DBC Website';

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/information" element={<OfferPage />} />
      <Route path="/premiumOffer" element={<UpsellPage />} />
      <Route path="/paymentRegular" element={<SpartanPage />} />
      <Route path="/paymentPremium" element={<SpartanGeneralPage />} />
      <Route path="/confirmation" element={<FreePage />} />
    </Routes>
  );
}

export default App;
