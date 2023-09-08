import { Routes, Route } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { UpsellPage } from "./components/UpsellPage";
import { PremiumOfferPage } from "./components/PremiumOfferPage";
import { PaymentRegularPage } from "./components/PaymentRegularPage";
import { PaymentPremiumPage } from "./components/PaymentPremiumPage";
import { ConfirmationPage } from "./components/ConfirmationPage";

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
