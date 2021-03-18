import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import "./App.css";
import Sentences from "./pages/Sentences";
import Words from "./pages/Words";

function App() {
  return (
    <div className="App">
      <Router>
        <h1 style={{ textAlign: "center" }}>あなぐらむつくるくん</h1>
        <p style={{ textAlign: "center" }}>
          <Link to="/">単語をつくる</Link>　
          <Link to="/sentences">文章をつくる</Link>
        </p>
        <Route exact path="/" component={Words} />
        <Route exact path="/sentences" component={Sentences} />
      </Router>
    </div>
  );
}

export default App;
