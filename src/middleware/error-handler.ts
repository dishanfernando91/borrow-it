import { type Request, type Response, type NextFunction } from 'express';
import AppError from '../errors/AppError'

const sendErrorDev = (err: AppError, req: Request, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    code: err.code || 'INTERNAL_ERROR',
    message: err.message,
    errors: err.errors,
    stack: err.stack,
    timestamp: new Date().toISOString(),
    path: req.originalUrl,
    method: req.method,
  });
};

const sendErrorProd = (err: AppError, req: Request, res: Response) => {
  if (err.isUnhandledError) {
    const response = {
      status: err.status,
      code: err.code || 'ERROR',
      message: err.message,
      timestamp: new Date().toISOString(),
      errors: [],
      retryAfter: undefined,
    };

    if (err.errors) {
      // @ts-ignore FIXME
      response.errors = err.errors;
    }

    if (err.retryAfter) {
      // @ts-ignore FIXME
      res.set('Retry-After', err.retryAfter);
      // @ts-ignore FIXME
      response.retryAfter = err.retryAfter;
    }
    res.status(err.statusCode).json(response);

  } else {
    // Programming errors: don't leak details to client
    console.error('UNEXPECTED ERROR:', err);

    res.status(500).json({
      status: 'error',
      code: 'INTERNAL_ERROR',
      message: 'Something went wrong',
      timestamp: new Date().toISOString(),
    });
  }
};

const errorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
 if (res.headersSent) {
    return next(err);
  }

  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else {
    sendErrorProd(err, req, res);
  }
};

export default errorHandler;
