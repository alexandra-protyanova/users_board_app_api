import * as colorService from '../services/color.service';
import { ControllerAction } from '../types';

export const getAll: ControllerAction = async (req, res) => {
  const colors = await colorService.findAll();

  res.send(colors);
};