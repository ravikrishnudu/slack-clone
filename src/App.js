import React from "react";
import Header from "./Components/Header";
import styles from "./App.module.css";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.body}>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
