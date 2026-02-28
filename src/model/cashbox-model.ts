import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import Accounts from "./account-model";

@Table({
  tableName: "Cashbox",
  timestamps: true,
})
export default class Cashbox extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @ForeignKey(() => Accounts)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  accountId!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string

  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: false,
  })
  balance!: number;

  // Target_amount
  @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: true,
  })
  targetAmount!: number | null;

  // Current_amount
    @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: true,
  })
  currentAmount!: number | null;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  deadline!: Date | null;

  // monthly_deposit
    @Column({
    type: DataType.DECIMAL(15, 2),
    allowNull: true,
  })
  monthlyDeposit!: number | null;

    @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  isActive!: boolean;


  @BelongsTo(() => Accounts)
  account!: Accounts;

}
