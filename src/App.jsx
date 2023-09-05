import React from "react";
import ShowEmojis from "../src/components/ShowEmojis";
import emojis from "../src/data/emojis";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <ShowEmojis emojis={emojis} />
      <Footer />
    </div>
  );
};

export default App;