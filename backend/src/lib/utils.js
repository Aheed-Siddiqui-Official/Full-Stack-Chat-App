import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true, //cant access through js, safe in attacks, XSS attacks
    sameSite: "strict", //CSRF attacks safe cross site
    secure: process.env.NODE_ENV !== "development",
  });
  return token;
};
