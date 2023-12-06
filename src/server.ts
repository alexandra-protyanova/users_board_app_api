import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import * as userController from './constrollers/user.controller';
import * as colorsController from './constrollers/color.controller';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_ORIGIN,
}));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/users', userController.getAll);

app.get('/users/:userId', userController.getOne);

app.post('/users', express.json(), userController.create);

app.get('/colors', colorsController.getAll);

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${process.env.PORT} 🚀🚀🚀`)
});