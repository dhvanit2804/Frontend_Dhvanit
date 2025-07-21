import React from "react";
import Accordion from "./components/Accordion";

const data = [
  {
    title: "What is React?",
    body: "React is a JavaScript library used to build user interfaces using components."
  },
  {
    title: "Why use Tailwind CSS?",
    body: "Tailwind CSS offers utility-first classes to rapidly build custom designs."
  },
  {
    title: "What is an Accordion?",
    body: "An accordion is a vertically stacked list of headers that can be clicked to reveal or hide content."
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">React Accordion</h1>
        {data.map((item, index) => (
          <Accordion key={index} title={item.title} body={item.body} />
        ))}
      </div>
    </div>
  );
};

export default App;
