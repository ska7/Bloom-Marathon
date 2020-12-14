import React from "react";
import "./App.scss";
import Benefits from "./components/Benefits";
import Reviews from "./components/Reviews";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Prices from "./components/Prices";
import ProgramPlan from "./components/ProgramPlan";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreditInfo from "./components/CreditInfo";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Intro />
            <Benefits />
            <Reviews />
            <ProgramPlan />
            <Prices />
          </Route>
          <Route path="/pay" component={CreditInfo} />
          <Route path="/test" component={Test} />
          <Route render={() => <CreditInfo />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
