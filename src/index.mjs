import express from 'express';

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (request, response) => {
  response.send({ msg: 'Hello' });
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
