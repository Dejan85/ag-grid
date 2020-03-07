import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// Grid css
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// components
import Nav from "./components/nav/Nav";
import RowSorting from "./components/row-sorting/RowSorting";

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/rowsorting">
            <RowSorting />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
