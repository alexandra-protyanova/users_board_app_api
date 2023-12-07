import { User } from "../models";

export const findAll = async () => User.findAll();

export const getById = async (id: number): Promise<User | null> => (
  User.findByPk(id)
);

export const createOne = async (
  { name, carColorId }: Pick<User, 'name' | 'carColorId'>
): Promise<User> => (
  User.create({  name, carColorId })
);

export const validate = (
  { name, carColorId } : Pick<User, 'name' | 'carColorId'>
) => {
  return typeof name === 'string' && typeof carColorId === 'number'
};