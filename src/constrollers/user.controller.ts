import { ControllerAction } from "../types";
import * as userService from '../services/user.service';

export const getAll: ControllerAction = async (req, res) => {
  const users = await userService.findAll();

  res.send(users);
};

export const getOne: ControllerAction = async (req, res) => {
  const { userId } = req.params;

  const user = await userService.getById(+userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
};

export const create: ControllerAction = async (req, res) => {
  const { name, carColorId } = req.body;

  if (!userService.validate({ name, carColorId })) {
    res.sendStatus(422);

    return;
  }

  const newUser = await userService.createOne({ name, carColorId });

  res.send(newUser);
};
