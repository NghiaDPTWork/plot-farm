import path from 'path';
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const dbName = process.env.DB_NAME || 'plotfarm';
const dbUser = process.env.DB_USER || 'sa';
const dbPassword = process.env.DB_PASSWORD || '';
const dbServer = process.env.DB_SERVER || 'localhost';
const dbPort = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 1433;

const sequelize = new Sequelize(
  dbName,
  dbUser,
  dbPassword,
  {
    host: dbServer,
    port: dbPort,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true,
        trustServerCertificate: true
      }
    },
    logging: false
  }
);

export default sequelize;
