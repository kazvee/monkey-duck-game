import React from "react";
import ShowEmojis from "../src/components/ShowEmojis";
import emojis from "../src/data/emojis";

const App = () => {
  return (
    <div className="App">
      <ShowEmojis emojis={emojis} />
    </div>
  );
};

export default App;