import * as colorService from '../services/color.service';
import { ControllerAction } from '../types';

export const getAll: ControllerAction = (req, res) => {
  const colors = colorService.findAll();

  res.send(colors);
};