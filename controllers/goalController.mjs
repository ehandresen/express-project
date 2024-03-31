import asyncHandler from 'express-async-handler';

// @desc Get goals
// @route GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
  response.status(200).json({ message: 'Get goals' });
});

// @desc Set goals
// @route POST /api/goals
const setGoal = asyncHandler(async (request, response) => {
  if (!request.body.text) {
    response.status(400);
    throw new Error('Please add a text field');
  }
});

// @desc Update goal
// @route PUT /api/goals/:id
const updateGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `Update goal ${request.params.id}` });
});

// @desc Delete goal
// @route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (request, response) => {
  response.status(200).json({ message: `Delete goal ${request.params.id}` });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
