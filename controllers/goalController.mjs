import asyncHandler from 'express-async-handler';
import Goal from '../models/goalModel.mjs';

// @desc Get goals
// @route GET /api/goals
const getGoals = asyncHandler(async (request, response) => {
  const goals = await Goal.find();

  response.status(200).json(goals);
});

// @desc Set goals
// @route POST /api/goals
const setGoal = asyncHandler(async (request, response) => {
  if (!request.body.text) {
    response.status(400);
    throw new Error('Please add a text field');
  }

  const goal = await Goal.create({
    text: request.body.text,
  });

  response.status(200).json(goal);
});

// @desc Update goal
// @route PUT /api/goals/:id
const updateGoal = asyncHandler(async (request, response) => {
  const goal = await Goal.findById(request.params.id);

  if (!goal) {
    response.status(400);
    throw new Error('Goal not found');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(
    request.params.id,
    request.body,
    { new: true } // ensure that the method returns the modified document rather than the original one
  );

  response.status(200).json(updatedGoal);
});

// @desc Delete goal
// @route DELETE /api/goals/:id
const deleteGoal = asyncHandler(async (request, response) => {
  const goal = await Goal.findById(request.params.id);

  if (!goal) {
    response.status(400);
    throw new Error('Could not delete goal');
  }

  await goal.deleteOne();

  response.status(200).json({ id: request.params.id });
});

export { getGoals, setGoal, updateGoal, deleteGoal };
