import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Sentences from "./pages/Sentences";
import Words from "./pages/Words";

function App() {
  return (
    <div className="App">
      <Router>
        <h1 style={{ textAlign: "center" }}>あなぐらむつくるくん</h1>
        <nav style={{ textAlign: "center" }}>
          <NavLink to="/words">
            <span>単語</span>をつくる
          </NavLink>
          <NavLink to="/sentences">
            <span>文章</span>をつくる
          </NavLink>
        </nav>
        <Route exact path="/">
          {<Redirect to="/words" />}
        </Route>
        <Route exact path="/words" component={Words} />
        <Route exact path="/sentences" component={Sentences} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
