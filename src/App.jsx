import React from "react";
import ShowEmojis from "../src/components/ShowEmojis";
import emojis from "../src/data/emojis";
import ShowMonkey from "../src/components/ShowMonkey";

const App = () => {
  return (
    <div className="App">
      <ShowEmojis emojis={emojis} />
      <ShowMonkey />
    </div>
  );
};

export default App;