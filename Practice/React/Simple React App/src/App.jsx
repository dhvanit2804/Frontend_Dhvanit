import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";

function App() {
  return(
    <BrowserRouter>
    <div className="min-vh-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App;
