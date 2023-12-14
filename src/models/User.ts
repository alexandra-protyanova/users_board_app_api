import { Table, Column, Model, PrimaryKey ,ForeignKey, AllowNull, AutoIncrement } from 'sequelize-typescript';
import { Color } from './Color';

@Table({
  tableName: 'users',
  timestamps: false,
})
export class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column
  id: number;

  @Column
  name: string;

  @ForeignKey(() => Color)
  @Column({
    field: 'car_color_id',
  })
  carColorId: number;
}