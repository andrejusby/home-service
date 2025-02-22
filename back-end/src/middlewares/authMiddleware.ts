import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface UserPayload {
  id: string;

  email: string; // pridetas email
  
  iat: number; //issued at
  exp: number; //expiration date
}

declare global {
  namespace Express {
    interface Request {
      currentUser?: UserPayload;
    }
  }
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  try {
    const token = authHeader.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET!) as UserPayload;
    console.log("Payload from JWT",payload); // Isspausdinam JWT turini
    req.currentUser = payload;
  } catch (err) {
    console.error(err);
    res.status(401).send({ error: 'Not authenticated' });
    return;
  }

  next();
};

export default authMiddleware;
