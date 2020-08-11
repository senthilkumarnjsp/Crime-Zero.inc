import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Rescue from "./components/Rescue";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        {/* {header to the all pages} */}
        <header className="App-header">
          {/* {Navigation link to the home page} */}
          <Link to="/">
            <h1>Crime Zero.inc</h1>
          </Link>
        </header>
      </div>
      {/* {Component responsible for keypad and heroes list} */}
      <Route path="/" exact component={Rescue} />
      {/* {Component responsible for hero detail} */}
      <Route path="/:heroForRescue" component={Hero} />
    </Router>
  );
}

export default App;
