import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  email: string;
  @Column({ select: false })
  password: string;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  gender: 'male' | 'female' | 'other';
  @Column()
  mobileNumber: string;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;
}
