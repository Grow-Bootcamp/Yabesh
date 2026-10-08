import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import {
  IsEmail,
  IsIn,
  IsInt,
  Length,
  Max,
  Min,
} from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 100,
  })
  @Length(3, 50, {
    message: 'Name must be between 3 and 50 characters',
  })
  name: string;

  @Column({
    type: 'int',
  })
  @IsInt()
  @Min(18, {
    message: 'Age must be at least 18',
  })
  @Max(120, {
    message: 'Age cannot be greater than  120',
  })
  age: number;

  @Column({
    type: 'varchar',
    length: 150,
    unique: true,
  })
  @IsEmail({}, {
    message: 'Please provide a valid email',
  }) 
  email: string;

  @Column({
    type: 'varchar',
    length: 50,
    default: 'user',
  })
  @IsIn(['admin', 'moderator', 'user'], {
    message: 'Role must be admin, moderator, or user',
  })
  role: string = 'user';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

