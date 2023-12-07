import { Table, Column, Model, Unique } from 'sequelize-typescript';

@Table({
  tableName: 'colors'
})
export class Color extends Model {
  @Unique
  @Column
  name: string;
}