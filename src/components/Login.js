import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="/Assets/background-img.jpg" alt="background-img" />
      </div>
      <form className="w-[35%] absolute bg-black px-16 py-6 my-24 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full rounded-md bg-black text-gray-500 bg-opacity-70 border border-gray-600"
          />
        )}
        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-2 w-full rounded-md bg-black text-gray-500 bg-opacity-70 border border-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full rounded-md bg-black text-gray-500 bg-opacity-70 border border-gray-600"
        />
        <button className="bg-red-600 w-full p-2 my-4 rounded-md">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 text-gray-500">
          {isSignInForm ? "New to Netflix? " : "Already have an Account? "}
          <span
            className="cursor-pointer text-white"
            onClick={() => {
              setIsSignInForm(!isSignInForm);
            }}
          >
            {isSignInForm ? "Sign Up Now" : "Sign In Now"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
