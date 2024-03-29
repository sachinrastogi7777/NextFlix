import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { Text_Based_On_Language } from "../utils/languageConstant";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const language = useSelector((store) => store.config.lang);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = () => {
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (errorMessage) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("User Not Found");
        });
    }
  };

  const inputCss =
    "lg:py-3 md:py-3 lg:text-base md:text-base text-sm py-3 bg-zinc-900 bg-opacity-60 text-white border-[1px] border-gray-400 rounded-md md:px-4 px-3 my-3 lg:px-4 w-full";
  const buttonCss =
    "w-full bg-red-700 py-2 text-white rounded-md my-3 font-semibold";

  return (
    <div className="relative w-12/12">
      <Header />
      <div className="bg-black bg-opacity-75 rounded-md  lg:w-4/12 w-11/12 sm:w-7/12 md:w-5/12 absolute mx-auto lg:my-28 my-44 md:my-24 right-0 left-0 z-20 py-4 md:py-6 lg:py-6">
        <form
          className="flex justify-center items-center flex-col lg:py-8 lg:px-8 py-4 px-2 md:py-8 md:px-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="w-10/12">
            <h1 className="text-white lg:text-4xl text-3xl md:text-4xl font-bold md:my-4 my-3 lg:my-4">
              {isSignInForm
                ? Text_Based_On_Language[language].signIn
                : Text_Based_On_Language[language].signUp}
            </h1>
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder={Text_Based_On_Language[language].name}
                className={inputCss}
              />
            )}
            <input
              ref={email}
              type="text"
              placeholder={Text_Based_On_Language[language].email}
              className={inputCss}
            />
            <input
              ref={password}
              type="password"
              placeholder={Text_Based_On_Language[language].password}
              className={inputCss}
            />
            <span className="text-red-500 font-semibold text-base">
              {errorMessage}
            </span>
            <button className={buttonCss} onClick={handleSubmit}>
              {isSignInForm
                ? Text_Based_On_Language[language].signIn
                : Text_Based_On_Language[language].signUp}
            </button>
            {isSignInForm && (
              <Link to={"/LoginHelp"}>
                <p className="text-center my-2 hover:underline hover:cursor-pointer text-white">
                  {Text_Based_On_Language[language].forgotPass}
                </p>
              </Link>
            )}
            <span className="lg:text-base md:text-base text-sm font-normal text-gray-500">
              {isSignInForm
                ? Text_Based_On_Language[language].newToNetflix
                : Text_Based_On_Language[language].alreadyAcc}
            </span>
            <span
              className="font-semibold lg:text-base md:text-base text-sm  text-gray-50 px-1.5 cursor-pointer"
              onClick={() => {
                setIsSignInForm(!isSignInForm);
              }}
            >
              {isSignInForm
                ? Text_Based_On_Language[language].signUp
                : Text_Based_On_Language[language].signIn}
            </span>
          </div>
        </form>
      </div>
      <div className="overflow-hidden w-full fixed">
        <img
          className="brightness-[.6] lg:scale-110 md:scale-x-125 sm:scale-x-150 sm:scale-y-110 sm:h-[600px] object-cover h-screen lg:h-[700px] w-full"
          alt="background-img"
          src="/Assets/background-img-2.jpg"
        ></img>
      </div>
    </div>
  );
};

export default Login;
