import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Rescue from "./components/Rescue";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">
            <h1>Crime Zero.inc</h1>
          </Link>
        </header>
      </div>
      <Route path="/" exact component={Rescue} />
      <Route path="/:heroForRescue" component={Hero} />
    </Router>
  );
}

export default App;
