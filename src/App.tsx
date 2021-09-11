import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import RepoSearchPage from "./pages/RepoSearchPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/repos/:id" component={RepoSearchPage} />
        <Route path="/repos" component={RepoSearchPage} />
        <Redirect to="/repos" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
