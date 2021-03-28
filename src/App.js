import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import DetailPage from "./pages/DetailPage";
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/category" component={CategoryPage} />
          <Route exact path="/detail" component={DetailPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
