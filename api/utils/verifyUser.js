import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';
export const verifyToken = (req, res, next) => {
  // console.log(process.env.JWT_SECRET);
  // console.log("asdf",req.cookies.access_token);
  const token = req.cookies.access_token;
  if (!token) {
    console.log('asdfs');
    return next(errorHandler(401, 'Unauthorized'));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      console.log('asdf');
      return next(errorHandler(401, 'Unauthorized'));
    }
    req.user = user;
    next();
  });
};
