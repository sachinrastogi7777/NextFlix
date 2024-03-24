export const validateEmail = (email) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Please Enter a valid Email";
  return null;
};

export const validateData = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  if (!isEmailValid) return "Please Enter a valid Email";
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isPasswordValid) return "Please Enter valid Password";
  return null;
};

export const validatePhone = (phone) => {
  const isPhoneValid = phone.length === 10;
  if (!isPhoneValid) return "Enter valid Phone Number";
  return null;
};
