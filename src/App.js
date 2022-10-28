import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Meal from "./components/Meal/Meal";

function App() {
  return (
    <div className="App">
      <Header />
      <Meal />
    </div>
  );
}

export default App;
