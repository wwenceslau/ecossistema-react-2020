import React from "react";
import { HashRouter } from "react-router-dom";

import NavBar from "./components/navbar";
import Routes from "./routes";

function App() {
  return (
    <HashRouter>
      <div className="container">
        <NavBar />
        <Routes />
      </div>
    </HashRouter>
  );
}

export default App;
