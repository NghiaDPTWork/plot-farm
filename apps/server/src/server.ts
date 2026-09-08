import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express, { Request, Response } from 'express';
import cors from 'cors';
import sequelize from './config/db';
import apiRoutes from './routes';

const app = express();

// Middleware
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
app.use(cors({ origin: frontendUrl }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Modular Feature Routes
app.use('/api', apiRoutes);

app.get('/api/test', (_req: Request, res: Response) => {
  res.json({ message: 'Welcome to PlotFarm Node.js Express Backend!' });
});

// Connect to Database and start server
sequelize.sync()
  .then(() => {
    console.log('✅ Connected to SQL Server and synced models.');
    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}.`);
    });
  })
  .catch((err: unknown) => {
    console.error('❌ Database connection failed:', err);
  });

export default app;
