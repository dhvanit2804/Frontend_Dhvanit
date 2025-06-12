import React, { useState } from "react";

const AuthButton = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const toggleLogin = () => {
    setisLoggedIn((prev) => !prev);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-3">
        {isLoggedIn ? "WelCome User !" : "Please login"}
      </h2>
      <div className="flex justify-center">
        <button
          className={
            (isLoggedIn ? "bg-red-500 hover:bg-red-400" : "bg-green-500") +
            " text-white px-6 py-2 rounded mt-6"
          }
          onClick={toggleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default AuthButton;
