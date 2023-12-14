import { Op } from "sequelize";
import { Color } from "../models";

interface Options {
  offset: string,
  limit: string,
  sort: string,
  order: string,
} 

export const findAllForPagination = async ({     
  offset,
  limit,
  sort,
  order
}: Options) =>  {
  return Color.findAndCountAll({
    offset: +offset * +limit,
    limit: +limit,
    order: [
      [sort, order],
    ],
  });
};
