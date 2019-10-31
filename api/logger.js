module.exports = logger;

// `logger` logs to the console the following information about each request: request method, request url, and a timestamp
// this middleware runs on every request made to the API
function logger(prefix) {
  return (req, res, next) => {
    console.log(
      `${prefix} [${new Date().toISOString()}] ${req.method} to ${req.originalUrl}`
    );
    next();
  }
}