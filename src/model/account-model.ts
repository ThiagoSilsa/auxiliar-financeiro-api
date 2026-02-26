import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import  User  from "./user-model";

@Table({
  tableName: "account",
  timestamps: true,
})
export default class Account extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  userId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  balance!: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive!: boolean;

  @BelongsTo(() => User)
  user!: User;
}
