import { Request, Response, NextFunction } from 'express'

export function resourceNotFound(request: Request, response: Response, next: NextFunction) {
    response.status(404);
    const error = new Error(`🔍 Resource Not Found - ${request.originalUrl}`);
    next(error);
}

export function errorHandler(error: Error, _request: Request, response: Response, _next: NextFunction) {
    const statusCode = response.statusCode !== 200 ? response.statusCode : 500;
    response.status(statusCode);
    response.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '🌵' : error.stack
    });
}

