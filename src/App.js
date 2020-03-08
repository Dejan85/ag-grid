import React, { memo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style/main.scss";

// components
import Nav from "./components/nav/Nav";
import RowSorting from "./components/pages/row/row-sorting/RowSorting";
import RowDragging from "./components/pages/row/row-dragging/RowDragging";

// Grid css
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

// Redux
import reducer from "./redux/slice/slice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

//saga
import createSagaMiddleware from "redux-saga";
import { fetchData } from "./redux/sagas/saga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer, middleware: [sagaMiddleware] });

sagaMiddleware.run(fetchData);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/">
              <RowSorting />
            </Route>
            <Route exact path="/rowdragging">
              <RowDragging />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default memo(App);
