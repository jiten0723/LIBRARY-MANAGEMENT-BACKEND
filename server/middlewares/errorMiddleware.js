class ErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
// Middleware for handling errors
export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;
  // Log the error for debugging
  if (err.code === 11000) {
    const message = "Duplicate field value entered";
    const statusCode = 400;
    err = new ErrorHandler(message, statusCode);
  }

  if (err.code === "jsonWebTokenError") {
    const message = "Json web token is invalid, try again";
    const statusCode = 400;
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "TokenExpiredError") {
    const message = "Json web token is expired, try again";
    const statusCode = 400;
    err = new ErrorHandler(message, statusCode);
  }
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    const statusCode = 400;
    err = new ErrorHandler(message, statusCode);
  }
  const errorMessage = err.errors
    ? Object.values(err.errors)
        .map((error) => error.message)
        .join(", ")
    : err.message;

  return res.status(err.statusCode).json({
    success: false,
    message: errorMessage,
  });
};

export default ErrorHandler;
