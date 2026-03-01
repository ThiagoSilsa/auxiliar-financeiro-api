import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import  Account  from "./account-model";


export interface UserCreateAttributes {
  name: string;
  email: string;
  password: string;
}

export interface UserAttributes extends UserCreateAttributes {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  tableName: "users",
  timestamps: true,
})
export default class User extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @HasMany(() => Account)
  accounts!: Account[];
}

