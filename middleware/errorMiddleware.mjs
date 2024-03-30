// middleware are just functions that execute during the request-response cycles (when client makes a request)
function errorHandler(error, request, response, next) {
  const statusCode = response.statusCode ? response.statusCode : 500;

  response.status(statusCode);

  response.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
}

export default errorHandler;
