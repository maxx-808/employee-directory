import React from "react";
import "./App.css";
import { HashRouter, Route } from "react-router-dom";

import Main from "./Pages/Main";
import Gender from "./Pages/Gender";
import LName from "./Pages/LName";
import Over10 from "./Pages/over10";
import NavBar from "./components/navbar/navbar";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <NavBar />

        <Route exact path="/" component={Main} />
        <Route exact path="/g" component={Gender} />
        <Route exact path="/l" component={LName} />
        <Route exact path="/o" component={Over10} />
      </div>
    </HashRouter>
  );
}

export default App;
