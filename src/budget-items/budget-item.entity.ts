import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BudgetItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  amount: string;

  @Column()
  owner: string;

  @Column()
  startDate: string;

  @Column()
  endDate: string;

  @Column({ default: true })
  isActive: boolean;
}
