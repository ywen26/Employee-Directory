import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Staff from "./pages/Staff";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter basename='/'>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/staff" component={Staff} />
        </Wrapper>
      </div>
    </HashRouter>
    );
}

export default App;
