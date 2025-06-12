import React, { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.password.trim()) newErrors.password = "Password is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmittedData(formData);
      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h4 className="mb-6 text-xl font-bold text-blue-600 text-center">
        User Form
      </h4>
      <form onSubmit={handleSubmit}>
        {["name", "email", "password"].map((field) => (
          <div className="mb-4" key={field}>
            <label className="block mb-1 font-medium capitalize">
              {field}:
            </label>
            <input
              type={field === "password" ? "password" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                errors[field]
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
            />
            {errors[field] && (
              <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
          <h6 className="font-semibold mb-2">Submitted Data:</h6>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Password:</strong> {submittedData.password}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormComponent;
