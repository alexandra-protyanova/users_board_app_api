import { Color } from '../models';
import * as colorService from '../services/color.service';
import { ControllerAction } from '../types';

// /colors?page=1&limit=15?sort=name&order=asc

export const getAll: ControllerAction = async (req, res) => {
  const {
    page = '1',
    limit = '2',
    sort = 'name',
    order = 'asc',
  } = req.query;

  if (typeof page !== 'string'
    || typeof limit !== 'string'
    || typeof sort !== 'string'
    || typeof order !== 'string'
  ) {
    res.sendStatus(422);

    return;
  }

  const colors = await colorService.findAllForPagination({
    offset: page,
    limit,
    sort,
    order,
  });

  res.send(colors);
};