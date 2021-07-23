import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Index from "../pages/Index";
import Share from "../pages/Share";
import Header from "./Header";
import { AnimatedSwitch } from "react-router-transition";

const Pages: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/share" component={Share} />
          <Route exact path="/" component={Index} />
          <Route path="*">Not Found</Route>
        </AnimatedSwitch>
      </Switch>
    </Router>
  );
};

export default Pages;
