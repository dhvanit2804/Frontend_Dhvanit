import { useState } from "react";
import "./index.css";
import Clickbutton from "./Handling Event/Clickbutton";
import Input from "./Handling Event/Input";
import AuthButton from "./Condition Rendering/AuthButton";
import Uservote from "./Condition Rendering/Uservote";

function App() {
  return (
    <>
      <div>
        {/* <Clickbutton />
        <hr className="mt-2.5" />
        <Input /> */}
        {/* <AuthButton /> */}
        <Uservote />
      </div>
    </>
  );
}

export default App;
