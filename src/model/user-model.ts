import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";

// Models
import  Account  from "./account-model";

export interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreateAttributes {
  name: string;
  email: string;
  password: string;
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

