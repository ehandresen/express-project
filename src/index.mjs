// import express from 'express';
import { createServer } from 'node:http';

// const app = express();

const server = createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.sendDate('Hello World!');
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
