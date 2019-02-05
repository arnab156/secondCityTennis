import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Navigation from "./Components/Nav/Nav";
import Background from "./Components/Background/Background";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Background/>
      <Switch>
        {/* <Route path="/portfolio" component={Portfolio} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
