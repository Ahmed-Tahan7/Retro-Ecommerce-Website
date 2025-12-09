import React, { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      // ------------------- Form logic for user authentication -------------------
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        <> </>
      ) : (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type="text"
          placeholder="Name"
        />
      )}
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="email"
        placeholder="Email"
      />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="password"
        placeholder="Password"
      />
      <div className="w-full flex justify-between text-sm -mt-2">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>
      <div className="inline-block">
        {/* -------------------------- Login/Sign Up switch logic ---------------------------- */}
        <button className="bg-dark-goldenrod text-white font-light p-7 py-2 mt-4 mr-10 rounded-full">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
        <button className="bg-black text-white font-light p-7 py-2 mt-4 rounded-full">
          {currentState === "Login" ? (
            <>
              {/* --------------------------- Google Sign In/Sign Up buttons ---------------------------- */}
              Sign In with
              <img
                src={assets.google}
                className="w-4 h-4 ml-2 mb-1 inline-block"
              />
            </>
          ) : (
            <>
              Sign Up with
              <img
                src={assets.google}
                className="w-4 h-4 ml-2 mb-1 inline-block"
              />
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default Login;
