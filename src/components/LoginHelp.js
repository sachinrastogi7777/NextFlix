import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validate";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Toaster, toast } from "react-hot-toast";

const LoginHelp = () => {
  const navigate = useNavigate();
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const email = useRef(null);

  const handleSubmit = () => {
    const message = validateEmail(email.current.value);
    setEmailErrorMessage(message);
    if (!emailErrorMessage) {
      const userEmail = email.current.value;
      sendPasswordResetEmail(auth, userEmail)
        .then(() => {
          // alert("Password reset link sent to Email. Please check your Email.");
          toast.success("Password Reset Link sent Successfully");
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          navigate("/error");
        });
    }
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 2000 }} />
      <div className="absolute w-full px-8 py-2 z-10 flex flex-wrap justify-between items-center">
        <img
          className="w-48"
          src="/Assets/netflix_logo.png"
          alt="netflix-logo"
        />
        <Link to="/">
          <p className="mx-1 text-red-700 font-semibold text-xl hover:cursor-pointer hover:underline">
            Sign In
          </p>
        </Link>
      </div>
      <div className="absolute">
        <img
          alt="login-help-bg-pic"
          src="/Assets/login-help-bg-img-2.jpg"
          className="w-screen"
        />
      </div>
      <form
        className="w-[36%] absolute bg-gray-100 px-8 py-4 my-24 mx-auto left-0 right-0 text-white rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-black text-3xl font-semibold py-4 my-2">
          Forgot Email/Password
        </h1>
        <p className="text-black py-1 my-2">
          We will send you an password reset link on your email to reset your
          password.
        </p>
        <input
          ref={email}
          className="border border-gray-600 bg-white w-full py-2 px-4 my-2 h-12 focus:outline-none text-black"
          type="text"
          placeholder="name@example.com"
        />
        <p className="text-red-500 py-2 font-semibold">{emailErrorMessage}</p>
        <button
          className="w-full py-2 px-4 my-4 h-12 bg-blue-600 hover:cursor-pointer hover:bg-blue-500"
          onClick={handleSubmit}
        >
          Email Me
        </button>
      </form>
    </div>
  );
};

export default LoginHelp;
