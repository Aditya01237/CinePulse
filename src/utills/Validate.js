export const checkValidData = (name,email, password) => {
    const validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  const validEmail = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPass = /^(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );
  if(!validName) return "Your name is not valid"
  if (!validEmail) return "Email is not valid";
  if (!validPass) return "Your password must contain 8 characters.";

  return null;
};
