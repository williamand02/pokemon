import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
import style from "./App.module.scss";
function App() {
  return (
    <div className={style.App}>
      <Header />
      <List />
      <Footer />
    </div>
  );
}

export default App;
