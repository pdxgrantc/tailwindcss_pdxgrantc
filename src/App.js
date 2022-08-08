import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import ToDoHomePage from "./ToDo/ToDoHomePage/ToDoHomePage"
import NewItem from "./ToDo/NewItem/NewItem"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/ToDo" element={<ToDoHomePage />} />
        <Route path="/ToDo/new-item" element={<NewItem />} />
      </Switch>
    </Router>
  )
}

export default App;
