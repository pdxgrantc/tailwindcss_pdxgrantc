import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";

import HomePage from "./HomePage/HomePage"
import NewItem from "./NewItem/NewItem"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-item" element={<NewItem />} />
      </Switch>
    </Router>
  )
}

export default App;
