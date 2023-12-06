import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.routes';
import { colorRouter } from './routes/color.routes';

dotenv.config();

const app = express()
  .use(express.json())
  .use(cors({ origin: process.env.CLIENT_ORIGIN }));

app.use('/users', userRouter);
app.use('/colors', colorRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(process.env.PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${process.env.PORT} 🚀🚀🚀`)
});