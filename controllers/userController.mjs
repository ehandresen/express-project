// @desc Register new user
// @route POST /api/users
const registerUser = (request, response) => {
  response.json({ message: 'Register User' });
};

// @desc Authenticate a user
// @route POST /api/users/login
const loginUser = (request, response) => {
  response.json({ message: 'Login User' });
};

// @desc Get user data
// @route GET /api/users/me
const getMe = (request, response) => {
  response.json({ message: 'User data' });
};

export { registerUser, loginUser, getMe };
