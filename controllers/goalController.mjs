// @desc Get goals
// @route GET /api/goals
function getGoals(request, response) {
  response.status(200).json({ message: 'Get goals' });
}

// @desc Set goals
// @route POST /api/goals
function setGoal(request, response) {
  if (!request.body.text) {
    response.status(400);
    throw new Error('Please add a text field');
  }
}

// @desc Update goal
// @route PUT /api/goals/:id
function updateGoal(request, response) {
  response.status(200).json({ message: `Update goal ${request.params.id}` });
}

// @desc Delete goal
// @route DELETE /api/goals/:id
function deleteGoal(request, response) {
  response.status(200).json({ message: `Delete goal ${request.params.id}` });
}

export { getGoals, setGoal, updateGoal, deleteGoal };
