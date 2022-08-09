import React from "react";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import ToDoHomePage from "./Pages/ToDo/ToDoHomePage/ToDoHomePage"
import NewItem from "./Pages/ToDo/NewItem/NewItem"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />} />
        <Route path="/Pages/ToDo" element={<ToDoHomePage />} />
        <Route path="/Pages/ToDo/new-item" element={<NewItem />} />
      </Switch>
    </Router>
  )
}

export default App;
