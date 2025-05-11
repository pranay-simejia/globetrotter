import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('destinations')
export class Destination {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true }) // Allow NULL values temporarily
  city: string;

  @Column({ nullable: true })
  country: string;

  @Column('text', { array: true, nullable: true })
  clues: string[];

  @Column('text', { array: true, nullable: true })
  funFacts: string[];

  @Column('text', { array: true, nullable: true })
  trivia: string[];
}