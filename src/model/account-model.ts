import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import  User  from "./user-model";
import Transactions from "./transactions-model";

@Table({
  tableName: "accounts",
  timestamps: true,
})
export default class Accounts extends Model {
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

  @HasMany(() => Transactions)
  transactions!: Transactions[];
}
