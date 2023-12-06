import express from 'express';
import cors from 'cors';
import * as userController from './constrollers/user.controller';
import * as colorsController from './constrollers/color.controller';

const PORT = 8000;
const CLIENT_ORIGIN = 'http://localhost:3000';

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/users', userController.getAll);

app.get('/users/:userId', userController.getOne);

app.post('/users', express.json(), userController.create);

app.get('/colors', colorsController.getAll);

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${PORT} 🚀🚀🚀`)
});