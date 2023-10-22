import { Request, Response,NextFunction } from "express";

const loggingMiddleware = (req:Request, res:Response, next:NextFunction) => {
    console.log(`${req.method} ${req.url} query: ${JSON.stringify(req.query)} body:${JSON.stringify(req.body)}`);
    next();
}

export default loggingMiddleware;