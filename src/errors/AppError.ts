export type AppErrorProps = {
    message: string;
    statusCode?: number;
    code?: string;
    errors?: any[];
    retryAfter?: string | number;
}

class AppError extends Error {
    public status;
    public isUnhandledError;
    public code;
    public errors;
    public retryAfter;
    public statusCode;

    constructor({ message, statusCode = 500, code, errors, retryAfter }: AppErrorProps) {
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isUnhandledError = false;
        this.retryAfter = retryAfter;
        this.code = code;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError