import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.mjs';

// @desc Register new user
// @route POST /api/users
const registerUser = asyncHandler(async (request, response) => {
  const { name, email, password } = request.body;

  if (!name || !email || !password) {
    response.status(400);
    throw new Error('Please add all fields');
  }

  // Check if user exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    response.status(400);
    throw new Error('User already exists');
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    response.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    response.status(400);
    throw new Error('Invalid user data');
  }
});

// @desc Authenticate a user (login)
// @route POST /api/users/login
const loginUser = asyncHandler(async (request, response) => {
  response.json({ message: 'Login User' });
});

// @desc Get user data
// @route GET /api/users/me
const getMe = asyncHandler(async (request, response) => {
  response.json({ message: 'User data' });
});

export { registerUser, loginUser, getMe };
