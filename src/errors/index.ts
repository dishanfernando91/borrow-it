import AppError from "./AppError";

class NotFoundError extends AppError {
  constructor(resource = 'Resource') {
    super({ message: `${resource} not found`, statusCode: 404 });
    this.code = 'NOT_FOUND';
  }
}

class ValidationError extends AppError {
  constructor(message: string, errors = []) {
    super({ message, statusCode: 400, code: 'VALIDATION_ERROR', errors });
  }
}

class UnauthorizedError extends AppError {
  constructor(message = 'Authentication required') {
    super({ message, statusCode: 401, code: 'UNAUTHORIZED' });
  }
}

class ForbiddenError extends AppError {
  constructor(message = 'Access denied') {
    super({ message, statusCode: 403, code: 'FORBIDDEN' });
  }
}

class ConflictError extends AppError {
  constructor(message = 'Resource already exists') {
    super({ message, statusCode: 409, code: 'CONFLICT' });
  }
}

class RateLimitError extends AppError {
  constructor(retryAfter = 60) {
    super({ 
        message: 'Too many requests',
        statusCode: 429,
        code: 'RATE_LIMIT_EXCEEDED',
        retryAfter
    });
  }
}

export = {
  AppError,
  NotFoundError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  ConflictError,
  RateLimitError,
};