import { useState } from "react";
import "./index.css";
import UseReducer from "./Hooks/UseReducer";

function App() {
  return (
    <>
      <div>
        <h1 className="font-semibold text-2xl p-4">
          Hello This is REACT REDUX APP
        </h1>
        <UseReducer />
      </div>
    </>
  );
}

export default App;
