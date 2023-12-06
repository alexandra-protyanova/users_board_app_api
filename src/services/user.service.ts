import { User } from "../types";

const usersFromServer = [
  { id: 1, name: 'Joe Biden', carColorId: 5 },
  { id: 2, name: 'Elon Musk', carColorId: 4 },
  { id: 3, name: 'Pan Roman', carColorId: 2 },
];

export const findAll = (): User[] => usersFromServer;

export const getById = (id: number): User | null => (
  usersFromServer.find(u => u.id === id) || null
);

export const createOne = ({ name, carColorId }: Omit<User, 'id'>): User => {
  const newUser = {
    name,
    carColorId,
    id: getMaxId(usersFromServer) + 1,
  };

  usersFromServer.push(newUser);

  return newUser;
};

export const getMaxId = (users: User[]) => (
  Math.max(...users.map(u => u.id)) || 0
);

export const validate = ({ name, carColorId } : Omit<User, 'id'>) => {
  return typeof name === 'string' && typeof carColorId === 'number'
};