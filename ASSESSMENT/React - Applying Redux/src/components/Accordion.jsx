import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // icon library

const Accordion = ({ title, body }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    console.log(`Toggled: ${title}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 border border-gray-200">
      <button
        onClick={toggleAccordion}
        className="w-full px-5 py-4 flex justify-between items-center text-left bg-blue-50 hover:bg-blue-100 focus:outline-none"
      >
        <span className="text-lg font-medium text-gray-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-blue-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-blue-500" />
        )}
      </button>
      <div
        className={`px-5 pt-0 pb-4 text-gray-700 text-base transition-all duration-300 ease-in-out ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {body}
      </div>
    </div>
  );
};

export default Accordion;
