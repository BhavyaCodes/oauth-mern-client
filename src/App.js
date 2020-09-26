import React from "react";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact render={() => <h1>homepage</h1>} />
      <Route render={() => <h2>404</h2>} />
    </Switch>
  );
}

export default App;
