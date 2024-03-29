import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/validate";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Toaster, toast } from "react-hot-toast";
import {
  Supported_Language,
  Text_Based_On_Language,
} from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../redux/configSlice";

const LoginHelp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const email = useRef(null);
  const language = useSelector((store) => store.config.lang);

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

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <Toaster toastOptions={{ duration: 2000 }} />
      <div className="absolute w-full px-4 md:px-8 py-1 md:py-2 z-10 flex flex-wrap justify-between items-center">
        <img
          className="lg:w-48 md:w-32 sm:w-24 w-16"
          src="/Assets/netflix_logo.png"
          alt="netflix-logo"
        />
        <div className="flex">
          <select
            className="bg-red-800 text-white border cursor-pointer border-black sm:px-1.5 sm:py-1 px-0.5 py-0.5 md:px-2 md:py-1 rounded-md"
            onChange={handleChangeLanguage}
          >
            {Supported_Language.map((lang) => (
              <option
                key={lang.identifier}
                className="text-white md:px-2 md:py-1 sm:px-1.5 sm:py-0.5"
                value={lang.identifier}
              >
                {lang.name}
              </option>
            ))}
          </select>
          <Link to="/">
            <p className="mx-0.5 md:mx-1 text-red-700 font-normal md:font-semibold text-sm sm:text-base md:text-xl hover:cursor-pointer hover:underline">
              {Text_Based_On_Language[language].signIn}
            </p>
          </Link>
        </div>
      </div>
      <div className="fixed w-full overflow-hidden">
        <img
          alt="login-help-bg-pic"
          src="/Assets/login-help-bg-img.jpg"
          className="brightness-[.6] w-screen object-cover h-screen sm:h-[600px]"
        />
      </div>
      <form
        className="w-[36%] absolute bg-gray-100 px-2 py-1 md:px-8 md:py-4 my-24 mx-auto left-0 right-0 text-white rounded-md"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-black text-base md:text-xl lg:text-3xl text-wrap font-normal md:font-semibold md:py-4 md:my-2 py-2 my-1">
          {Text_Based_On_Language[language].forgotPass}
        </h1>
        <p className="text-black py-1 my-2 text-xs md:text-base">
          {Text_Based_On_Language[language].forgotPassMessage}
        </p>
        <input
          ref={email}
          className="border border-gray-600 bg-white w-full py-1 md:py-2 px-2 md:px-4 my-1 md:my-2 h-6 md:h-12 focus:outline-none text-black"
          type="text"
          placeholder={Text_Based_On_Language[language].emailPlaceholder}
        />
        <p className="text-red-500 py-1 md:py-2 font-normal md:font-semibold">
          {emailErrorMessage}
        </p>
        <button
          className="w-full py-1 md:py-2 px-2 md:px-4 my-2 md:my-4 h-6 md:h-12 bg-blue-600 hover:cursor-pointer hover:bg-blue-500 text-xs md:text-lg"
          onClick={handleSubmit}
        >
          {Text_Based_On_Language[language].emailMe}
        </button>
      </form>
    </div>
  );
};

export default LoginHelp;
