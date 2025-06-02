import { useState } from "react";
import Hello from "./Hello";
import JSXintro from "./Task 1/JSXintro";
import Maincompo from "./Task 2/Maincompo";
import Usercard from "./Task 3/Usercard";
import Counter from "./Task 3/Counter";

function App() {
  return (
    <div>
      <Hello />
      <JSXintro />
      <Maincompo />
      <Usercard name="DHVANIT" location="Ahmedabad"/>
      <Counter />
    </div>
  );
}

export default App;
