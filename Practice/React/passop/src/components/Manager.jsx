import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({
    site: "",
    username: "",
    password: "",
  });
  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("Show the Password");
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
    } else {
      ref.current.src = "icons/eyecross.png";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, form]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]));
    console.log([...passwordArray, form]);
  };

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
      </div>
      <div className="mycontainer">
        <h1 className="text-4xl font-bold text-center">
          <span className="text-green-500">/ &lt;</span>
          <span>Pass</span>
          <span className="text-green-500">OP/ &gt;</span>
        </h1>
        <p className="text-green-900 text-lg text-center">
          Your Own Password Manager
        </p>
        <div className="text-black flex flex-col p-4 gap-8 items-center">
          <input
            onChange={handleChange}
            placeholder="Enter Website URL"
            value={form.site}
            name="site"
            className="rounded-full bg-white border border-green-500 w-full p-4 py-1"
            type="text"
          />
          <div className="flex w-full justify-between gap-8">
            <input
              onChange={handleChange}
              placeholder="Enter Username"
              value={form.username}
              name="username"
              className="rounded-full bg-white border border-green-500 w-full p-4 py-1"
              type="text"
            />
            <div className="relative">
              <input
                onChange={handleChange}
                placeholder="Enter Password"
                value={form.password}
                name="password"
                className="rounded-full bg-white border border-green-500 w-full p-4 py-1"
                type="text"
              />
              <span
                className="absolute right-[3px] top-[4px] cursor-pointer"
                onClick={showPassword}
              >
                <img
                  ref={ref}
                  className="p-1"
                  width={26}
                  src="icons/eye.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <button
            onClick={savePassword}
            className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 border cursor-pointer border-green-900 py-2 w-fit"
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div>No Passwords to show</div>}
          {passwordArray.length != 0 && (
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-green-800 text-white">
                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                </tr>
              </thead>
              <tbody className="bg-green-100">
                {passwordArray.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="py-2 border border-white text-center w-32">
                        {item.site}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.username}
                      </td>
                      <td className="py-2 border border-white text-center w-32">
                        {item.password}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default Manager;
