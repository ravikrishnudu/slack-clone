import React, { useState } from "react";
import Header from "./Components/Header";
import styles from "./App.module.css";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <Router>
        {!user ? ( 
          <Login />
        ) : (
          <>
            <Header />
            <div className={styles.appBody}>
              <Sidebar />
              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>weelcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
