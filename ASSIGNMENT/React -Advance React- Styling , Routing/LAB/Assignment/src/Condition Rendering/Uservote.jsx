import React, { useState } from "react";

const Uservote = () => {
  const [age, setAge] = useState("");
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const message =
    age >= 18
      ? "You are eligible to vote!"
      : "You are not eligible to vote yet.";
  return (
    <div className="text-center mt-5">
      <h1 className="text-4xl font-bold text-black-500">
        User Vote Eligibility
      </h1>
      <div className="mt-4">
        <input
          type="number"
          placeholder="Enter your age"
          value={age}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded"
        />
      </div>
      <h2 className="text-2xl font-semibold mt-4">{message}</h2>
    </div>
  );
};

export default Uservote;
