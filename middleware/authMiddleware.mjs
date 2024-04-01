import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.mjs';

const protect = asyncHandler(async (request, response, next) => {
  let token;

  if (
    request.headers.authorization &&
    request.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = request.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      request.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (error) {
      console.log(error);
      response.status(401); // Not authorized
      throw new Error('Not authorized');
    }
  }

  if (!token) {
    response.status(401);
    throw new Error('Not authorized, no token');
  }
});

export default protect;
