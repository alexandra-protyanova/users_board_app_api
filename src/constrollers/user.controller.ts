import { ControllerAction } from "../types";
import * as userService from '../services/user.service';

export const getAll: ControllerAction = (req, res) => {
  const users = userService.findAll();

  res.send(users);
};

export const getOne: ControllerAction = (req, res) => {
  const { userId } = req.params;

  const user = userService.getById(+userId);

  if (!user) {
    res.sendStatus(404);

    return;
  }

  res.send(user);
};

export const create: ControllerAction = (req, res) => {
  const { name, carColorId } = req.body;

  if (!userService.validate({ name, carColorId })) {
    res.sendStatus(422);

    return;
  }

  const newUser = userService.createOne({ name, carColorId });

  res.send(newUser);
};
