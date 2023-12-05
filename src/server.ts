import express from 'express';
import cors from 'cors';

const PORT = 8000;
const CLIENT_ORIGIN = 'http://localhost:3000';

const usersFromServer = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

const colorosFromServer = [
  { id: 1, name: 'Black' },
  { id: 2, name: 'DeepPink' },
  { id: 3, name: 'Red' },
  { id: 4, name: 'Aquamarine' },
  { id: 5, name: 'Gold' },
  { id: 6, name: 'YellowGreen' },
  { id: 7, name: 'Yellow' },
];

const app = express();

app.use(cors({
  origin: CLIENT_ORIGIN,
}));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/users', (req, res) => {
  res.send(usersFromServer);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;

  const user = usersFromServer.find(u => u.id === Number(userId));

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
});

app.get('/colors', (req, res) => {
  res.send(colorosFromServer);
});

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server is running on http://localhost:${PORT} 🚀🚀🚀`)
});