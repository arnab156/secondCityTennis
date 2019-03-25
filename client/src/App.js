import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Navigation from "./Components/Nav/Nav";
import Background from "./Components/Background/Background";
import Courts from "./Pages/TennisCourts/tennisCourts";
import Sponsors from "./Pages/Sponsors/Sponsors";
import ByLaws from "./Pages/ByLaws/ByLaws";
import Social from "./Pages/Social/Social";
import Programs from "./Pages/Programs/Programs";
import SS from "./Components/SummerSingles/SS_info";
import SD from "./Components/SummerDoubles/SD_info";
import Start from "./Components/StartRestart/SR_info";
import Classic from "./Components/TennisClassic/TC_info";
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
        <Route exact path="/courts" component={Courts} />
        <Route exact path="/sponsors" component={Sponsors} />
        <Route exact path="/bylaws" component={ByLaws} />
        <Route exact path="/social" component={Social} />
        <Route exact path="/programs" component={Programs} />
        <Route exact path="/summersingles" component={SS} />
        <Route exact path="/summerdoubles" component={SD} />
        <Route exact path="/restart" component={Start} />
        <Route exact path="/classic" component={Classic} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
