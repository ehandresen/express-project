import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send({ msg: 'Hello' });
});

app.get('/api/users', (request, response) => {
  response.send([
    { id: 1, user: 'james', password: 'james123' },
    { id: 2, user: 'jane', password: 'jane123' },
    { id: 3, user: 'danny', password: 'danny123' },
  ]);
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
