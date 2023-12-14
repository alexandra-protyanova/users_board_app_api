import { Sequelize } from 'sequelize-typescript';
import { User, Color } from '../models';

export const sequelize = new Sequelize(process.env.DB_URI ?? '', {
  models: [User, Color],
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
      require: true,
    },
  },
});

export const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
