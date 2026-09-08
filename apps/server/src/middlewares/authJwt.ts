import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export interface AuthenticatedRequest extends Request {
  userId?: number;
  userRole?: string;
}

interface DecodedToken extends JwtPayload {
  id: number;
  role: string;
}

export const verifyToken = (req: AuthenticatedRequest, res: Response, next: NextFunction): void | Response => {
  let token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No token provided!' });
  }

  if (Array.isArray(token)) {
    token = token[0];
  }

  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  const secret = process.env.JWT_SECRET || 'plotfarm-secret-key';

  jwt.verify(token, secret, (err: Error | null, decoded?: JwtPayload | string) => {
    if (err || !decoded || typeof decoded === 'string') {
      return res.status(401).json({ message: 'Unauthorized!' });
    }
    const payload = decoded as DecodedToken;
    req.userId = payload.id;
    req.userRole = payload.role;
    next();
  });
};

export const isAdmin = (req: AuthenticatedRequest, res: Response, next: NextFunction): void | Response => {
  if (req.userRole === 'ROLE_ADMIN') {
    next();
  } else {
    return res.status(403).json({ message: 'Require Admin Role!' });
  }
};
