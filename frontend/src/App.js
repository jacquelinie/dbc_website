import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/Landing";
import { UpsellPage } from "./components/Upsell";
import { OfferPage } from "./components/Offer";
import { SpartanPage } from "./components/Spartan";
import { SpartanGeneralPage } from "./components/SpartanGeneral";
import { FreePage } from "./components/Free";

function App() {
  document.title = 'DBC Website';
  return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => {
              return <LandingPage {...props} />;
            }}
          />
          <Route exact path="/information" component={OfferPage} />
          <Route exact path="/premiumOffer" component={UpsellPage} />
          <Route exact path="/paymentRegular" component={SpartanPage} />
          <Route exact path="/paymentPremium" component={SpartanGeneralPage} />
          <Route exact path="/confirmation" component={FreePage} />
        </Switch>
      </Router>
  );
}

export default App;
