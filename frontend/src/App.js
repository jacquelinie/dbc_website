import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/Landing";
import { UpsellPage } from "./components/Upsell";
import { PremiumOfferPage } from "./components/PremiumOffer";
import { PaymentRegularPage } from "./components/PaymentRegular";
import { PaymentPremiumPage } from "./components/PaymentPremium";
import { ConfirmationPage } from "./components/Confirmation";

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
          <Route exact path="/information" component={UpsellPage} />
          <Route exact path="/premiumOffer" component={PremiumOfferPage} />
          <Route exact path="/paymentRegular" component={PaymentRegularPage} />
          <Route exact path="/paymentPremium" component={PaymentPremiumPage} />
          <Route exact path="/confirmation" component={ConfirmationPage} />
        </Switch>
      </Router>
  );
}

export default App;
