import express from 'express';

export const router = express.Router();

router.get('/', (request, response) => {
  response.status(200).json({ message: 'Get goals' });
});

router.post('/', (request, response) => {
  response.status(200).json({ message: 'Set goal' });
});

router.put('/:id', (request, response) => {
  response.status(200).json({ message: `Update goal ${request.params.id}` });
});

router.delete('/:id', (request, response) => {
  response.status(200).json({ message: `Delete goal ${request.params.id}` });
});
