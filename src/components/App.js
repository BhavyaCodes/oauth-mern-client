import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  const cookies = new Cookies();

  const [isLoggedIn, setIsLoggedIn] = useState(
    cookies.get("isLoggedIn") === "1" ? true : false
  );

  useEffect(() => {
    const check = async () => {
      console.log("test");
      try {
        await axios.get("/api/isloggedin");
        setIsLoggedIn(true);
        return cookies.set("isLoggedIn", "1");
      } catch (error) {
        setIsLoggedIn(false);
        cookies.remove("isLoggedIn");
      }
    };
    check();
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route
          path="/"
          exact
          render={isLoggedIn ? () => <Home /> : () => <Redirect to="/login" />}
        />
        <Route path="/login" exact render={() => <Login />} />
        <Route
          path="/profile"
          exact
          render={
            isLoggedIn ? () => <Profile /> : () => <Redirect to="/login" />
          }
        />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </>
  );
}

export default App;
