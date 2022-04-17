import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import ScrollToTop from "react-scroll-to-top";
import Scrollrender from "./Scrollrender/Scrollrender";
import Login from "./Login/Login";
import Forgetpasword from "./Forgetpassword/Forgetpassword";
import Signup from "./Signup/Signup";
import Newpassword from "./Newpassward/Newpassword";
import Productdetails from "./Productdetails/Productdetails";
import BookingForm from "./BookingForm/BookingForm";
import Aboutus from "./Aboutus/Aboutus";
import Estimate from "./Estimate/Estimate";
import UserDashboard from "./UserDashboard/UserDashboard";

import { store, persistor, history } from "./redux/store";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/lib/integration/react";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ToastContainer autoClose={8000} />
        <PersistGate persistor={persistor}>
          <div className="App">
            <Router>
              <ScrollToTop />
              <Scrollrender />

              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <Route
                  exact
                  path="/forget-password"
                  component={Forgetpasword}
                />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/new-password" component={Newpassword} />
                <Route
                  exact
                  path="/Product-details"
                  component={Productdetails}
                />
                <Route exact path="/Booking-Form" component={BookingForm} />
                <Route exact path="/About-us" component={Aboutus} />
                <Route exact path="/estimate" component={Estimate} />
                <Route exact path="/Dashboard" component={UserDashboard} />
              </Switch>
            </Router>
          </div>
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
