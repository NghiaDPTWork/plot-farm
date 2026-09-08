import express, { Request, Response, NextFunction } from 'express';
import { signup, signin } from './auth.controller';

const router = express.Router();

router.use((_req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Origin, Content-Type, Accept'
  );
  next();
});

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
