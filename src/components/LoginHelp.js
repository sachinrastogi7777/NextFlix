import React, { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";
import { validateEmail, validatePhone } from "../utils/validate";

const LoginHelp = () => {
  //   const [forgotCredential, setForgotCredential] = useState(false);
  const [textSelect, setTextSelect] = useState("Email");
  const [phoneNumber, setPhoneNumber] = useState();

  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const [phoneErrorMessage, setPhoneErrorMessage] = useState(null);

  const email = useRef(null);
  const phone = useRef(null);

  const handleSubmit = () => {
    if (textSelect === "Email") {
      const message = validateEmail(email.current.value);
      setEmailErrorMessage(message);
    } else {
      const message = validatePhone(phone.current.value);
      setPhoneErrorMessage(message);
    }
  };

  return (
    <div>
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
        <p className="py-1 text-black">
          How would you like to reset your password?
        </p>
        <div className="ml-6 my-2">
          <div className="items-center text-base pl-9 relative my-1">
            <input
              className="w-6 h-6 left-0 top-0 absolute"
              type="radio"
              id="text"
              name="fav_language"
              value="Email"
              checked={textSelect === "Email"}
              onChange={(e) => {
                setTextSelect(e.target.value);
              }}
            />
            <label htmlFor="email" className="text-black text-lg py-1">
              Email
            </label>
          </div>
          <div className="items-center text-base pl-9 relative my-1">
            <input
              className="w-6 h-6 left-0 top-0 absolute"
              type="radio"
              id="text"
              name="fav_language"
              value="Text Message (SMS)"
              checked={textSelect === "Text Message (SMS)"}
              onChange={(e) => {
                setTextSelect(e.target.value);
              }}
            />
            <label htmlFor="text" className="text-black text-xl">
              Text Message (SMS)
            </label>
          </div>
        </div>
        <p className="text-black py-1 my-2">
          We will send you an email with instructions on how to reset your
          password.
        </p>
        {textSelect === "Email" ? (
          <input
            ref={email}
            className="border border-gray-600 bg-white w-full py-2 px-4 my-2 h-12 focus:outline-none text-black"
            type="text"
            placeholder="name@example.com"
          />
        ) : (
          <PhoneInput
            ref={phone}
            className="border border-gray-600 bg-white w-2/3 py-2 px-4 my-2 h-12 focus:outline-none text-black"
            defaultCountry="IN"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        )}
        <p className="text-red-500 py-2 font-semibold">
          {textSelect === "Email" ? emailErrorMessage : phoneErrorMessage}
        </p>
        <button
          className="w-full py-2 px-4 my-4 h-12 bg-blue-600 hover:cursor-pointer hover:bg-blue-500"
          onClick={handleSubmit}
        >
          {textSelect === "Email" ? "Email Me" : "Text Me"}
        </button>
        {/* <p
          className="text-blue-600 text-wrap my-2 hover:underline hover:cursor-pointer"
          onClick={() => setForgotCredential(!forgotCredential)}
        >
          I can't remember my email address or phone number.
        </p> */}
      </form>
    </div>
  );
};

export default LoginHelp;
