import React from "react";

function JSXintro() {
  const topic = "JSX";
  const desc =
    "JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like createElement() or appendChild().";
  return (
    <div>
      <h1>Welcome to {topic}</h1>
      <h1>{desc}</h1>
    </div>
  );
}

export default JSXintro;
