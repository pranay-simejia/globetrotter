import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Table name in the database
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ default: 0 })
  correctScore: number;
  
  @Column({ default: 0 })
  incorrectScore: number;
}